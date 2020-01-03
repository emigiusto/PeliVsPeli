//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var controller = require('./controlador/controlador')
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/competencias',controller.traercompetencias);
app.get('/competencias/:id',controller.competencia);
app.get('/competencias/:id/peliculas',controller.traerpeliscompetencia);

app.post('/competencias/:idCompetencia/voto/',controller.votarunacompetencia)

app.get('/',function (req, res) {
  res.send('Helloooo');
});
//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = process.env.PORT || 8080;


app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

