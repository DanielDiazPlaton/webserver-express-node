
// Require
//Esta libreria ( HTTP ) se utiliza para crear un servidor
const http = require('http');

// createServer( (reject, resolve) => {}) se utiliza para crear un servidor y se debe llevar un callback
http.createServer( (req,res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' });

  let salida = {
    nombre: 'Daniel',
    edad: 24,
    url: req.url
  }

  res.write( JSON.stringify( salida ) );
  res.end(); // Es importante que no se me olvide colocar el .end para terminar el servidor si no se quedara sin hacer nada

})
.listen(8080); // liste() ahi se pone el puerto en donde nos queremos conectar en nuestro servidor

console.log('Escuchando el puerto 8080');
