const express = require('express');
const cors = require('cors');
const mongoose = require('./database/dataBaseConection');

require('./database/model/novIdeas');
const Idea = mongoose.model('idea');
const app = express();
app.use(cors());
app.use(express.json());


app.get("/idea", (req, res) => {
  Idea.find({})
    .then(idea => {
      return res.json(idea);
    })
    .catch(err => {
      res.status(400).json({
        err: true,
        message: "no about found"
      });
    });
});

app.post("/idea/register", async (req, res) => {
  const {
    title,
    category,
    description
  } = req.body;

  await Idea.create({
    title,
    category,
    description,
  }, err => {
    if (err)
      return res.status(400).json({
        err: true,
        message: "erro no cadastro"
      });
    return res.json({
      err: false,
      message: "cadastro realizado com sucesso"
    });
  });
});

app.listen(8080, err => {
  if (err)
    console.log(err);
  console.log('servidor rodando portas : http://localhost:8080');
})