const express = require("express");
const app = express();

app.get("test", (req, res) => {
  res.send("performing a test");
});

app.listen(3006, ()=>{
    console.log("Sever is running on port 3006")
})
