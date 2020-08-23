/*
 *Este es un servidor hecho en node
 *
 * */


const express = require('express')
const app = express()

// HBS
const hbs = require('hbs');


const port = process.env.PORT || 3000; // Para determinar el puerto que heroku me da para desplegar mi aplicacion y
// en caso de que no me de puerto lo corro en el 3000 de manera local


app.use(express.static(__dirname + '/public')); // Este es para crear milderware para poner
// estatica la ruta de la carpeta public en donde se alojara el contenido de la pagina web, como en un servidor apache
// donde cualquier persona va a poder ver todo lo que este en dominio publico


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
})


app.get('/', (req, res) => {

  res.render('home', {
    name: 'Daniel'
  });  // Renderiza el home.hbs

});

app.get('/about', (req, res) => {

  res.render('about', {
 
  });  // Renderiza el home.hbs

});

/*app.get('/', (req, res) => {
  //res.send('Hello World')

  let salida = {
    nombre: 'Daniel',
    edad: 24,
    url: req.url
  }

  res.send(salida);

})

app.get('/data', (req, res) => {

  res.send('Hello Data')

})  */
 
app.listen(port, () => {
  console.log( `Escuchando peticiones en el puerto ${ port }` );
});
