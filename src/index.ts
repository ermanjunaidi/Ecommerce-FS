const express = require("express");
const app = express();
const port = 5000;

// CREATE

app.post("/users", (req, res, next) => {
  res.json({ message: "users created" });
});

// READ
app.get("/users", (req, res) => {
  res.json({ message: "users list" });
});

// UPDATE

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `user ${id} updated` });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = res.params;
  res.json({ message: `users ${id} deleted` });
});
