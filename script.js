// Connect to server
const socket = io();
const editor = document.getElementById("editor");

// When user types, send text to server
editor.addEventListener("input", () => {
  socket.emit("text-change", editor.value);
});

// When server sends update, show it in editor
socket.on("text-update", (data) => {
  editor.value = data;
});
