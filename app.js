const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Hypnotic Poison", preco:"425", descricao: "Notas: doces de damasco, ameixa e coco. Evolui em notas de coração florais e femininas de jasmim, tuberosa, lírio-do- vale e rosas e o amadeirado quente e provocante do pau-Brasil e da alcaravia.", imagem:"produto.png"},
  {id: 2, nome: "Good Girl: Velvet Fatale", preco:"549,90", descricao: "Notas: As notas de topo são: Amêndoa, Café, Limão e Bergamota. As notas de coração são: Tuberosa, Jasmim, Rosa Búlgara e Raíz de Orris.", imagem:"produto.png"}, 
  {id: 3, nome: "Lost Cherry", preco:"3.690,00", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"},
  {id: 4, nome: "L' Interdit Rouge", preco:"428,00", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"},
  {id: 5, nome: "Sì Passione", preco:"673,00", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"},
  {id: 6, nome: "Scandal Jean Paul Gaultier", preco:"628,00", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"},
  {id: 7, nome: "Jo Malone", preco:"1.105,00", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"},
  {id: 8, nome: "VIP Rosé", preco:"673,00", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"},
  {id: 9, nome: "Baccarat Rouge 540", preco:"6.581,15", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"},
  {id: 10, nome: "Amber Rouge", preco:"443,99", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"produto.png"}
]


function buscarProdutoPorId(id) {
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render("produtos" { produtos });
});

app.get ('/produto' , (req, res)=>{
  res.render('produto', {message:' Amém '});
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});