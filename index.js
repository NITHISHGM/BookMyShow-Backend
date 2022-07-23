const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const login = require("./core/login");
const timing = require("./core/timing");
const bookATicket = require("./core/bookATicket");
const cancelTicket = require("./core/cancelTicket");

const verifyToken = require("./middleware/verifyToken");
const deleteShowonceDone = require("./core/deleteShowOnceDone");

const executeQuery = require("./database/exectueQuery");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.post("/login", login.login);

app.post("/bookATicket", verifyToken.verifyToken, bookATicket.bookATicket);

app.post("/cancelTicket", verifyToken.verifyToken, cancelTicket.cancelTicket);

app.post(
  "/deleteShowonceDone",
  verifyToken.verifyToken,
  deleteShowonceDone.deleteShowonceDone
);

app.post("/timing", verifyToken.verifyToken, timing.timing);
app.listen(3001, () => {
  console.log("server started");
});
