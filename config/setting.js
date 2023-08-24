//Jangan ubah ini agar tidak error !!
function setting(express,path,fs,server){
  function notFound(res){
    fs.readFile('./error/notFound.html',(error,data) => {
      if(error) return res.status(404).json({ mess: 'Error code 404!!'});
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }
  server.use(express.static(path.resolve('./public')));
  server.set('json spaces',2);
  server.use(express.json());
  server.use((req,res) => {notFound(res)});
}

module.exports = setting;