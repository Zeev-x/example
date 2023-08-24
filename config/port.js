const port = process.env.PORT || 8000; //Ganti port di sini!

async function serverListen(server){
  var mess = `Website runing on http://localhost:${port}`;
  server.listen(port,() => console.log(mess));
}

module.exports = serverListen;