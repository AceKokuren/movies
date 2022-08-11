import './App.css';
import Movie from "./components/Movie";
import {useEffect, useState} from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import MovieInfo from "./components/MovieInfo";

const tmdbKey = process.env.API_KEY;


function App() {
	const query = `https://api.themoviedb.org/3/discover/movie?&api_key=581ff752d0b7378a67028dc38a686b58&release_date.desc`
	
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
			<div className="movie-container">
				{movies.map(movie =>
					<Router>
						<Link to={movie.title}>
							<Movie key={movie.id} {...movie}/>
						</Link>
						<Routes>
							<Route path={movie.title} element={<MovieInfo/>}/>
						</Routes>
					</Router>)}
				
			</div>
		</>
	);
}

export default App;
