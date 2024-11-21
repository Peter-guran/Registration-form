const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs").promises;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/data", async (req, res) => {
  const data = await fs.readFile("data.txt", "utf-8");
  res.send(data);
});

app.post("/submit", async (req, res) => {
  await fs.writeFile("data.txt", JSON.stringify(req.body));
  res.send("Save data");
});

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
