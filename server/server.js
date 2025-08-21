import express from 'express';
import cors from 'cors';

// Importe os dados dos produtos.
import products from '../client/src/data/productsData.js';

const app = express();
const port = 5000;

app.use(cors());

// Crie a rota para a sua lista de produtos.
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Inicie o servidor.
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});