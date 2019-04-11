const express = require("express");
const app = express();

app.use(express.json());

let dm22 = [
  "Mykenzie",
  "Sabrina",
  "Gibbs",
  "Collins",
  "Fethi",
  "Edson",
  "Neaj",
  "David",
  "TJ",
  "Anna",
  "Jorge",
  "Adam",
  "Trevor",
  "Derek",
  "Anand",
  "Bryan",
  "Peter",
  "Juan"
];

app.get("/api/students", (req, res) => {
  if (req.query) {
    let dm22FunSide = dm22.filter(student => {
      return student.charAt(0) === req.query.name;
    });

    res.status(200).json(dm22FunSide);
  } else {
    res.status(200).json(dm22);
  }
});

app.put("/api/students/:id", (req, res) => {
  const index = dm22.findIndex(student => student === req.params.id);
  dm22[index] = req.body.name;
  res.status(200).json(dm22);
});

app.delete("/api/students/:id", (req, res) => {
  const index = dm22.findIndex(student => student === req.params.id);
  dm22.splice(index, 1);
  res.status(200).json(dm22);
});

app.post("/api/students", (req, res) => {
  dm22.push(req.body.name);
  res.status(200).json(dm22);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
