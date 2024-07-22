const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

// socket io
io.on("connection", (socket) => {
  socket.on("client-One", (message) => {
    io.emit("server-One", message);
  });
});

app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});
server.listen(3001, () => {
  console.log("Server running on port 3001");
});
