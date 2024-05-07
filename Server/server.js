const WebSocket = require("ws");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const wss = new WebSocket.Server({ noServer: true });
const devices = {}; // Клиенты устройств
const clients = new Set(); // Все подключенные клиенты

wss.on("connection", function connection(ws) {
  clients.add(ws); // Добавляем новое соединение в список всех клиентов

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    const { id, state } = JSON.parse(message);
    devices[id] = ws; // Сохраняем соединение устройства
    broadcastState(id, state); // Рассылка состояния всех клиентам
  });

  ws.on("close", () => {
    clients.delete(ws); // Удаляем соединение из списка при отключении
    Object.keys(devices).forEach((id) => {
      if (devices[id] === ws) {
        console.log(`Device ${id} disconnected`);
        delete devices[id];
      }
    });
  });
});

// Функция для рассылки состояния всем подключенным клиентам
function broadcastState(id, state) {
  const message = JSON.stringify({ id, state });
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

const server = app.listen(8080, function () {
  console.log("Server listening on http://localhost:8080");
});

server.on("upgrade", function upgrade(request, socket, head) {
  console.log("UPGRADE FUNC CALLED");
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit("connection", ws, request);
  });
});

app.post("/command", (req, res) => {
  const { id, command } = req.body;
  if (devices[id] && devices[id].readyState === WebSocket.OPEN) {
    devices[id].send(JSON.stringify({ id, command }));
    broadcastState(id, command); // Отправка нового состояния всем клиентам
    res.send(`Command '${command}' sent to device '${id}'`);
  } else {
    res.status(404).send("Device not connected");
  }
});
