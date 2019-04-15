const express = require("express");
const app = express();
const http = require("http").Server(app).listen(3000);

console.log("Server started");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
}
)