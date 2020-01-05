select pelicula.id as 'peliculaId', pelicula.genero_id, pelicula.director, pelicula.anio, pelicula.titulo,pelicula.poster, 
competencias.nombre as 'competenciaNombre', competencias.id as 'competenciaId' , competencias.genero_id as 'genero'

from pelicula 

join  
(select id, genero_id, director_id, actor_id from competencias where id = 1) as t1 on  t1.id = 1
order by rand() limit 2