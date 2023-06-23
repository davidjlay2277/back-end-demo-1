const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json()); // middleware ???  When we want to be able to accept JSON.
app.use(cors());
const PORT = 5050;

const inventory = [
  "cheetoes",
  "thing2",
  "thing3",
  "thing4",
  "thing5",
  "thing6",
  "thing7",
  "thing8",
  "thing9",
  "thing10",
];

app.get("/api/inventory", (req, res) => {
  res.status(200).send(inventory);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
