// device.js
const WebSocket = require("ws");

const device = {
  id: "device1",
  state: "off"
};

const ws = new WebSocket("ws://127.0.0.1:8080");

ws.on("open", function open() {
  console.log("Connected to the server.");

  // Периодическая отправка состояния на сервер
  setInterval(() => {
    ws.send(JSON.stringify({ id: device.id, state: device.state }));
  }, 3000);
});

ws.on("message", function incoming(message) {
  console.log("Received message:", message);
  const command = JSON.parse(message);
  if (command.id === device.id) {
    device.state = command.command; // обновляем состояние по команде от сервера
  }
});
ws.on("error", function (error) {
  console.error("WebSocket error:", error);
});
