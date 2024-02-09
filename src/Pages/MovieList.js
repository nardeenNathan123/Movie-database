import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './movie.css'
import { addToFavorites, removeFromFavorites } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
  
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=86d95abed199237571d3f60c37a2d91b')
            .then((res) => {
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const isFavorite = (movieId) => favorites.some((favMovie) => favMovie.id === movieId);

  const handleFavoriteToggle = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

    return (
        <>
            <h1 className="text-center mb-5 " style={{marginTop:'150px'}}>Popular Movies</h1>
<div className="container">
    <div className="row justify-content-around">
        {movies.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4">
                <div className="card cards">
                <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                    <img
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                        className="card-img-top"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    /></Link>
                    <div className="card-body">
                            <h3 className="card-title text-center ">{movie.title}</h3>
                        
                    </div>
                    <button
                    className={`btn ${isFavorite(movie.id) ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                    onClick={() => handleFavoriteToggle(movie)}
                    style={{ marginLeft: '10px' }}
                  >
                    {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                </div>
            </div>
        ))}
    </div>
</div>

    
        </>
    );
}

export default MovieList;
