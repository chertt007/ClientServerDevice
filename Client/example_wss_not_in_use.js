// // Подключаемся к WebSocket серверу
// const ws = new WebSocket("ws://localhost:8080");

// // Функция для отправки команд устройствам
// function sendCommand(id, command) {
//   fetch("http://localhost:8080/command", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ id, command })
//   }).catch((error) => console.error("Ошибка при отправке команды:", error));
// }

// // Обработка сообщений через WebSocket
// ws.onmessage = function (event) {
//   const message = JSON.parse(event.data);
//   const device = document.getElementById(`device-${message.id}`);
//   if (device) {
//     device.querySelector(".status").textContent = `Статус: ${message.state}`;
//   } else {
//     const deviceElement = document.createElement("div");
//     deviceElement.id = `device-${message.id}`;
//     deviceElement.innerHTML = `
//       <h2>Устройство ${message.id}</h2>
//       <p class="status">Статус: ${message.state}</p>
//       <button onclick="sendCommand('${message.id}', 'on')">Включить</button>
//       <button onclick="sendCommand('${message.id}', 'off')">Выключить</button>
//     `;
//     document.getElementById("devices").appendChild(deviceElement);
//   }
// };

// ws.onerror = function () {
//   console.log("Ошибка подключения к WebSocket");
// };
