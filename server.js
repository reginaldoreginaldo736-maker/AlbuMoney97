const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0f172a">
<link rel="manifest" href="/manifest.json">
<title>AlbuMoney97 - Carteira</title>
<style>
  *{box-sizing:border-box} body{font-family:system-ui; background:#0f172a; color:white; margin:0; padding:20px}
  .container{max-width:420px; margin:0 auto}
  .card{background:#1e293b; padding:24px; border-radius:20px; margin-bottom:16px}
  .saldo{font-size:42px; font-weight:900; color:#22c55e; margin:10px 0}
  .grid{display:grid; grid-template-columns:1fr 1fr; gap:12px}
  .btn{border:none; padding:16px; border-radius:12px; font-weight:bold; cursor:pointer; font-size:15px}
  .btn-green{background:#22c55e; color:#000} .btn-red{background:#ef4444; color:white} .btn-blue{background:#3b82f6; color:white; width:100%; margin-top:12px}
  input,select{width:100%; padding:14px; border-radius:10px; border:1px solid #334155; background:#0f172a; color:white; margin:8px 0}
  .trans{ display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid #334155}
  .trans:last-child{border:0}
</style>
</head>
<body>
<div class="container">
  <div class="card" style="text-align:center">
    <h2 style="margin:0">💰 AlbuMoney97</h2>
    <p style="color:#94a3b8; margin:5px 0">Minha Carteira</p>
    <div class="saldo" id="saldo">AOA 0,00</div>
    <div class="grid">
      <button class="btn btn-green" onclick="abrir('entrada')">+ Entrada</button>
      <button class="btn btn-red" onclick="abrir('saida')">- Saída</button>
    </div>
  </div>

  <div class="card" id="formCard" style="display:none">
    <h3 id="formTitle">Adicionar</h3>
    <input id="valor" type="number" placeholder="Valor (ex: 5000)">
    <input id="desc" type="text" placeholder="Descrição (ex: Salário, Pão)">
    <select id="cat"><option>Alimentação</option><option>Transporte</option><option>Salário</option><option>Lazer</option><option>Outros</option></select>
    <button class="btn btn-blue" onclick="salvar()">Salvar</button>
    <button class="btn" style="background:#334155; color:white; width:100%; margin-top:8px" onclick="fechar()">Cancelar</button>
  </div>

  <div class="card">
    <h3 style="margin-top:0">📋 Movimentos</h3>
    <div id="lista"><p style="color:#64748b">Nenhum movimento ainda</p></div>
    <button class="btn" style="background:#334155; color:#ef4444; width:100%; margin-top:12px" onclick="limpar()">Limpar tudo</button>
  </div>
  
  <p style="text-align:center; color:#475569; font-size:12px">AlbuMoney97 v3.0 • Feito para amigos • Instale no celular</p>
</div>

<script>
let tipo='entrada';
let dados = JSON.parse(localStorage.getItem('albu97') || '{"saldo":0,"trans":[]}');
function atualizar(){
  document.getElementById('saldo').innerText = 'AOA ' + dados.saldo.toLocaleString('pt-AO', {minimumFractionDigits:2});
  const lista = document.getElementById('lista');
  if(!dados.trans.length){ lista.innerHTML='<p style=color:#64748b>Nenhum movimento ainda</p>'; return; }
  lista.innerHTML = dados.trans.slice().reverse().map(t=> \`
    <div class="trans"><div><b>\${t.desc}</b><br><small style="color:#94a3b8">\${t.cat} • \${t.data}</small></div>
    <div style="color:\${t.tipo==='entrada'?'#22c55e':'#ef4444'}; font-weight:bold">\${t.tipo==='entrada'?'+':'-'} AOA \${t.valor}</div></div>\`).join('');
}
function abrir(t){ tipo=t; document.getElementById('formCard').style.display='block'; document.getElementById('formTitle').innerText = t==='entrada'?'Nova Entrada':'Nova Saída'; window.scrollTo(0,0); }
function fechar(){ document.getElementById('formCard').style.display='none'; }
function salvar(){
  const v = parseFloat(document.getElementById('valor').value); const d = document.getElementById('desc').value; const c = document.getElementById('cat').value;
  if(!v || !d) return alert('Preencha valor e descrição');
  if(tipo==='entrada') dados.saldo+=v; else dados.saldo-=v;
  dados.trans.push({valor:v, desc:d, cat:c, tipo, data:new Date().toLocaleDateString()});
  localStorage.setItem('albu97', JSON.stringify(dados)); document.getElementById('valor').value=''; document.getElementById('desc').value=''; fechar(); atualizar();
}
function limpar(){ if(confirm('Apagar tudo?')){ dados={saldo:0, trans:[]}; localStorage.removeItem('albu97'); atualizar(); } }
atualizar();
if('serviceWorker' in navigator){ /* PWA ready */ }
</script>
</body>
</html>
  `);
});

app.get('/manifest.json', (req,res)=>{
  res.json({
    name:"AlbuMoney97",
    short_name:"AlbuMoney97",
    start_url:"/",
    display:"standalone",
    background_color:"#0f172a",
    theme_color:"#0f172a",
    icons:[{src:"https://cdn-icons-png.flaticon.com/512/482/482514.png", sizes:"512x512", type:"image/png"}]
  });
});

app.listen(PORT, ()=>console.log('AlbuMoney97 Carteira no ar'));
