select pelicula.id as 'peliculaId', pelicula.genero_id, pelicula.director, pelicula.anio, pelicula.titulo,pelicula.poster, 
t1.nombre as 'competenciaNombre', t1.id as 'competenciaId' , t1.genero_id as 'genero'

from pelicula 

join  
(select id, genero_id, director_id, actor_id, nombre from competencias where id = 2) as t1 on t1.id = 2

WHERE pelicula.genero_id LIKE
	CASE WHEN (t1.genero_id IS NULL = 1) THEN 
		'%'
	ELSE
		t1.genero_id
	END

AND pelicula.director LIKE
	CASE WHEN (t1.director_id IS NULL = 1) THEN 
		'%'
	ELSE
		t1.director_id
	END
    
AND pelicula.director LIKE
	CASE WHEN (t1.director_id IS NULL = 1) THEN 
		'%'
	ELSE
		t1.director_id
	END
  
order by rand() limit 2
