import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path}) => {
	return (
		<div className="movie">
			<figure>
				<img src={IMG_API + poster_path} alt={title}/>
			</figure>
			<h3>{title}</h3>
		</div>
	)
}

export default Movie;
