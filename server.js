const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('<h1>AlbuMoney97 no ar! 🚀</h1><p>App funcionando!</p>');
});
app.listen(PORT, () => {
  console.log('Rodando na porta ' + PORT);
});
