select pelicula.id as 'peliculaId', 
pelicula.titulo,npelicula.poster, 
competencias.nombre as 'competenciaNombre', 
competencias.id as 'competenciaId',
count(votos.id) as 'Count Votos'

from pelicula 
join competencias on competencias.id = 1 
join votos on (votos.pelicula_id = pelicula.id and votos.competencia_id = competencias.id )
GROUP BY pelicula.id

order by rand() limit 3;