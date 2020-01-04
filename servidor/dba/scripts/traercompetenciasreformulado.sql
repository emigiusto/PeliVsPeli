select pelicula.id as 'peliculaId', pelicula.genero_id, pelicula.director, pelicula.anio, pelicula.titulo,pelicula.poster, 
competencias.nombre as 'competenciaNombre', competencias.id as 'competenciaId' , competencias.genero_id as 'genero'

from pelicula 

join competencias on competencias.id = 1 

where pelicula.genero_id = 2

order by rand() limit 2