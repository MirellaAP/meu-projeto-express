const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Hypnotic Poison", preco:"425", marca:"Dior", descricao: "Notas: doces de damasco, ameixa e coco. Evolui em notas de coração florais e femininas de jasmim, tuberosa, lírio-do- vale e rosas e o amadeirado quente e provocante do pau-Brasil e da alcaravia.", imagem:"poison.jpg"},
  {id: 2, nome: "Good Girl: Velvet Fatale", preco:"549,90", marca:"Carolina Herrera", descricao: "Notas: As notas de topo são: Amêndoa, Café, Limão e Bergamota. As notas de coração são: Tuberosa, Jasmim, Rosa Búlgara e Raíz de Orris.", imagem:"good.girl.jpg"}, 
  {id: 3, nome: "Lost Cherry", preco:"3.690,00", marca:"Tom Ford", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"lost.jpg"},
  {id: 4, nome: "L' Interdit Rouge", preco:"428,00", marca:"Givenchy", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"linterdit.jpeg"},
  {id: 5, nome: "Sì Passione", preco:"673,00", marca:"Giorgio Armani", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"passione.jpg"},
  {id: 6, nome: "Scandal Intense", preco:"628,00", marca:" Jean Paul Gaultier", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"scandal"},
  {id: 7, nome: "Scarlet Poppy Cologne Intense", preco:"1.105,00", marca:"Jo Malone", descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"scarlet.jpg"},
  {id: 8, nome: "VIP Rosé Red", preco:"673,00", marca:"Carolina Herrera", descricao: "Notas: Tomate, fresco com nuances amadeiradas, licor de framboesa, roda da Bulgária, tiramisu e pimenta", imagem:"rose.jpg"},
  {id: 9, nome: "Baccarat Rouge 540", preco:"6.581,15", marca:"Maison Francis Kurkdjian" ,descricao: "Amêndoa Amarga e Açafrão. No coração, um toque elegante de Jasmim Egípcio e Cedro.", imagem:"rouge.jpg"},
  {id: 10, nome: "Amber Rouge", preco:"443,99", marca:"" ,descricao: "Notas: Cereja negra, Amendoa amarga, Rosa absoluta, Tonka Torrada.", imagem:"amber.jpg"}
]


function buscarProdutoPorId(id) {
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render("index", { produtos });
});

app.get ('/produtos/:id' , (req, res)=>{
  const produto = buscarProdutoPorId(req.params.id)
  res.render('produtos', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});