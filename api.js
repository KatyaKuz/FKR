// Завдання 4
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

app.post('/api', (req, res) => {
  const items = req.body.items;

  if (!items || !Array.isArray(items) || items.length !== 2) {
    return res.json({ response: 'Некоректний формат даних' });
  }

  const product1Count = parseInt(items[0].count);
  const product2Count = parseInt(items[1].count);
  const product1Name = items[0].name || 'product1';
  const product2Name = items[1].name || 'product2';

  const products = {
    [product1Name]: product1Count,
    [product2Name]: product2Count
  };

  const MuchL = [];
  if (product1Count > 5) MuchL.push(product1Name);
  if (product2Count > 5) MuchL.push(product2Name);

  if (MuchL.length > 0) {
    return res.json({
      response: `Too much of ${MuchL.join(', ')}`,
      products,
      total: 0
    });
  }

  const total = (product1Count + product2Count) * 10;

  res.json({
    response: 'ОК',
    products,
    total
  });
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});


