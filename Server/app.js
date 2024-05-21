const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

server.listen(5000, () => console.log("ada di 5000"));
