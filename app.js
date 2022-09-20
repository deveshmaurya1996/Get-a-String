const express = require("express");
const app = express1();

app.get("/", (request, response) => {
  const output = response.send("Express JS");
  return output;
});

app.listen(3000);
module.exports = app;
