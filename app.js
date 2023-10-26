const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Hypnotic Poison", preco:"400", descricao: "Descricao do produto", imagem:"produto.png"},{id: 1, nome: "Good Girl: Velvet Fatale", preco:"549,90", descricao: "Descricao do produto", imagem:"produto.png"}
]

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get ('/produto' , (req, res)=>{
  res.render('produto', {message:' Amém '});
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});