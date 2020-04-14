const express = require('express');
const cors = require('cors');
const mongoose = require('./database/dataBaseConection');

require('./database/model/novIdeas');
const Idea = mongoose.model('idea');
const app = express();
app.use(cors());
app.use(express.json());


app.get("/idea", async (req, res) => {

  const idea  = await Idea.find({})
    try{
      return res.json(idea);
    }catch{
      return res.json({
        erro:400,
        message:'nao foi possivel listar'
      })
    }
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
  });
  try{
    return res.json({
      erro:false,
      message:'cadastro realizado'
    })
  }catch{
    return res.json({
      erro:true,
      message:'cadastro falho'
    })
  }

});

app.listen(8080, err => {
  if (err)
    console.log(err);
  console.log('servidor rodando portas : http://localhost:8080');
})