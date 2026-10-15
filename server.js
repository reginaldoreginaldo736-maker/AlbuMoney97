app.get('/manifest.json', (req,res)=>{
  res.json({
    name:"AlbuMoney97 - Carteira",
    short_name:"AlbuMoney97",
    description:"AlbuMoney97 é sua carteira digital simples para controlar entradas e saídas em Kwanza. Feito em Angola para amigos.",
    start_url:"/",
    display:"standalone",
    background_color:"#0f172a",
    theme_color:"#22c55e",
    scope:"/",
    lang:"pt-AO",
    icons:[
      {src:"https://cdn-icons-png.flaticon.com/512/482/482514.png", sizes:"192x192", type:"image/png", purpose:"any maskable"},
      {src:"https://cdn-icons-png.flaticon.com/512/482/482514.png", sizes:"512x512", type:"image/png", purpose:"any maskable"}
    ]
  });
});
