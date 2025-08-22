// Import required packages
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Create app and server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve frontend files from "public" folder
app.use(express.static("public"));

// WebSocket logic
io.on("connection", (socket) => {
  console.log("✅ A user connected");

  // When user types something, send it to others
  socket.on("text-change", (data) => {
    socket.broadcast.emit("text-update", data);
  });

  // When user leaves
  socket.on("disconnect", () => {
    console.log("❌ A user disconnected");
  });
});

// Start server
server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
