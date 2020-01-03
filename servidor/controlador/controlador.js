var con = require('../dba/conexionbd');


function traercompetencias(req, res) {
    var sql = "select * from competencias"
    
            con.query(sql, function(error, resultado) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }


        res.send(JSON.stringify(resultado));
    });
}

function competencia(req, res) {
//TRAER DOS ALEATORIAS??
    var idCompetencia = req.params.id;
    var sql = "select * from competencias where id = " + idCompetencia;
            con.query(sql, function(error, resultado) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }


        res.send(JSON.stringify(resultado));
    });
}


function traerpeliscompetencia(req, res) {
    //TRAER DOS ALEATORIAS??
        var idCompetencia = req.params.id;
        var sql =   "select pelicula.id as 'peliculaId', pelicula.genero_id, pelicula.director, pelicula.anio, pelicula.titulo,"
                    + "pelicula.poster, competencias.nombre as 'competenciaNombre', competencias.id as 'competenciaId'"
                    + " from pelicula join competencias on competencias.id = " + idCompetencia
                    + " order by rand() limit 2";
        con.query(sql, function(error, arraypeliculasrandom) {
            if (error) {
                console.log("Hubo un error en la consulta", error.message);
                return res.status(404).send("Hubo un error en la consulta");
            }
            if (arraypeliculasrandom.length>0){
                var results ={
                    competencia: arraypeliculasrandom[0].nombre,
                    peliculas: arraypeliculasrandom
                }
            }

            res.send(JSON.stringify(results));
        });
    }


    function votarunacompetencia(req, res) {

            var idCompetencia = req.params.idCompetencia;
            var votoPeli = req.body.idPelicula;

            var sql = "INSERT INTO `votos` VALUES (NULL," + idCompetencia + "," + votoPeli +")"

        con.query(sql, function(error, result) {
                if (error) {
                    console.log("Hubo un error en la consulta", error.message);
                    return res.status(404).send("Hubo un error en la consulta");
                }
    
                res.send("Voto Ok");
            });
        }
        

module.exports = {
    competencia: competencia,
    traercompetencias:traercompetencias,
    traerpeliscompetencia: traerpeliscompetencia,
    votarunacompetencia:votarunacompetencia
};