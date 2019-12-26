//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var controller = require('.controlador/controlador')
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/players',controller.traerPlayers);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = process.env.PORT || 8079;


app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

