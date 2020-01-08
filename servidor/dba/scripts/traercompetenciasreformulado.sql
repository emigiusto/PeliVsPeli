select distinct pelicula.id as 'peliculaId', pelicula.genero_id, pelicula.director, pelicula.anio, pelicula.titulo,pelicula.poster, 
tcompetencias.nombre as 'competenciaNombre', tcompetencias.id as 'competenciaId' , tcompetencias.genero_id as 'genero', tactores.actor_id as 'ActorID'

from pelicula 

join  
	(select id, genero_id, director_id, actor_id, nombre from competencias where id = 5) as tcompetencias on tcompetencias.id = 5
join
	(select actor_id, pelicula_id from actor_pelicula) as tactores on tactores.pelicula_id = pelicula.id


WHERE pelicula.genero_id LIKE
	CASE WHEN (tcompetencias.genero_id IS NULL = 1) THEN 
		'%'
	ELSE
		tcompetencias.genero_id
	END

AND pelicula.director LIKE
	CASE WHEN (tcompetencias.director_id IS NULL = 1) THEN 
		'%'
	ELSE
		tcompetencias.director_id
	END

AND tactores.actor_id LIKE
	CASE WHEN (tcompetencias.actor_id IS NULL = 1) THEN 
		'%'
	ELSE
		tcompetencias.actor_id
	END
order by rand() limit 2
