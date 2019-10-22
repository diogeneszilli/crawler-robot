const http = require("http");
const app = require("./config/express");

const port = 3000;

http.createServer(app).listen(port, function() {
  console.log("Servidor iniciado na porta 3000");
});
