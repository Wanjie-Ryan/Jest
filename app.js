const express = require("express");

function App() {
  const app = express();

  app.post("/users", (req, res) => {
    res.sendStatus(200).send({})
  });
}

module.exports = App;
