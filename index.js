const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");

const app = express();

app.use(status());

app.get("/", (req, res) => {
  //   fs.readFile("./file.txt", (err, data) => {
  //     res.end(data);
  //   });

  const stream = fs.createReadStream("./file.txt", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

app.listen("8030", () => {
  console.log("server running successfully");
});
