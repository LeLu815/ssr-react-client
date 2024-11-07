import express from "express";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const context = {};
  const content = renderer(req, store, context);
});
