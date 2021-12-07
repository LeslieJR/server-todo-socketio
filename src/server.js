const { urlencoded } = require("express");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

//cualquiera puede acceder al server => cors:{origin: '*'}
const io = new Server(server, { cors: { origin: "*" } });

//BEGIN SOCKET IO
io.on("connection", (socket) => {
  //console.log("socket connected");

  socket.on('task:created', (msg)=>{
      io.emit('task:update', msg)
  })
  socket.on("disconnect", () => {
    console.log("socket disconnected");
  });
});

//END SOCKET IO

const taskRoutes = require("./routes/task.routes");
//Settings
app.set("port", process.env.PORT || 3500);

//Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api/task", taskRoutes);

module.exports = {
  app,
  server,
};
