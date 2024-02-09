
 
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails() {
    const { movieId } = useParams();  
    const [movieInfo, setMovieInfo] = useState({});
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=86d95abed199237571d3f60c37a2d91b`)
            .then((res) => {
                setMovieInfo(res.data);  
            })
            .catch((err) => {
                console.log(err);
            });
    }, [movieId]); 
    const isFavorite = (movieId) => favorites.some((favMovie) => favMovie.id === movieId);

  const handleFavoriteToggle = (movieid) => {
    if (isFavorite(movieid)) {
      dispatch(removeFromFavorites(movieid));
    } else {
      dispatch(addToFavorites(movieid));
    }
  };

    return ( 
        
        <div className="container my-5 py-3">
        <div className="row text">
            <div className="col-md-6 d-flex justify-content-center mx-auto product mt-5">
                <img style={{height:'600px'}}
                src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
                alt={movieInfo.original_title}
            />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className="display-5 fw-bold">{movieInfo.original_title}</h1>
                <hr />
                <h3 className="my-4">Release Date: {movieInfo.release_date}</h3>
                <h3 className="my-4">Vote Average: {movieInfo.vote_average}</h3>
                <h3 className="my-4">Runtime: {movieInfo.runtime} minutes</h3>
                <p className="lead">{movieInfo.overview}</p>
                <button
                    className={`btn ${isFavorite(movieInfo.id) ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                    onClick={() => handleFavoriteToggle(movieInfo)}
                    style={{ marginLeft: '10px' }}
                  >
                    {isFavorite(movieInfo.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>            </div>
        </div>
    </div> 
    );
}

export default MovieDetails;




