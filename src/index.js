const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const User = require("./mongodb");

const templatePath = path.join(__dirname, "../templates");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
  console.log("signup");
});

// app.post("/login", async (req, res) => {});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  // await collection.insertMany([data]);
  await collection.save();

  res.render("home");
});

app.listen(3000, () => {
  console.log(`Server started at port 3000`);
});
