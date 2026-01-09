const { Server } = require("socket.io");
const authenticateSocket = require("./middlewares/auth.socket")

// socket server

const initSocketServer = (httpServer) => {
  const io = new Server(httpServer, {
    /* options */
  });

  io.use(authenticateSocket)

  io.on("connection", (socket) => {
    console.log("Socket Server connected");
    socket.on("disconnect", () => {
      console.log("Socket Server disconnected");
    });
  });
};

module.exports = initSocketServer;
