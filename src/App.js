import Movie from "./components/Movie";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const currentDate = new Date();
	const queryDate = currentDate.toJSON().split("T")[0];
	const query = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&release_date.lte=${queryDate}&sort_by=popularity.desc`
	const [movies, setMovies] = useState([]);
	
	useEffect(() => {
		fetch(query)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);
	
	return (
		<>
			<h2>Out Now</h2>
			<div className="container-fluid movie-container">
				<div className="row">
					{movies.map((movie, i) => i < 10 ? <Movie key={movie.id} {...movie}/> : null)}
				</div>
			</div>
		</>
	);
}

export default App;
