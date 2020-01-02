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
    console.log(idCompetencia)
    var sql = "select * from competencias where id = " + idCompetencia;
    console.log(sql)
            con.query(sql, function(error, resultado) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }


        res.send(JSON.stringify(resultado));
    });
}

module.exports = {
    competencia: competencia,
    traercompetencias:traercompetencias
};