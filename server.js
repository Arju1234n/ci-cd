import express from "express";
import sum from "./sum.js";

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const result = sum(Number(a), Number(b));
  res.send(`The sum of ${a} and ${b} is ${result}`);
});