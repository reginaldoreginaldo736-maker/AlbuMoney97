const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AlbuMoney97</title>
    <style>
      body{font-family:system-ui; background:#0f172a; color:white; margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center}
      .card{background:#1e293b; padding:40px; border-radius:20px; box-shadow:0 20px 40px rgba(0,0,0,.4); max-width:400px; width:90%}
      h1{font-size:32px; margin:0 0 10px}
      p{color:#94a3b8}
      .btn{background:#22c55e; color:black; border:none; padding:15px 25px; border-radius:12px; font-weight:bold; font-size:16px; margin-top:20px; width:100%; cursor:pointer}
      .saldo{font-size:48px; font-weight:900; margin:20px 0; color:#22c55e}
    </style>
  </head>
  <body>
    <div class="card">
      <h1>💰 AlbuMoney97</h1>
      <p>Seu dinheiro no controle</p>
      <div class="saldo">AOA 0,00</div>
      <p>App no ar com sucesso!</p>
      <button class="btn" onclick="alert('Vamos adicionar funcoes!')">+ Adicionar Saldo</button>
      <p style="margin-top:20px; font-size:12px">Versao 2.0 - No ar no Render</p>
    </div>
  </body>
  </html>
  `);
});
app.listen(PORT, () => console.log('AlbuMoney97 v2 rodando na porta ' + PORT));
