const express = require("express");
const app = express();
app.get("/", (req, res, next) => {
  res.send({ message: "Successful" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server started on : ", PORT);
});
