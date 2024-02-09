// FavoritesPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Add this import
import { removeFromFavorites } from '../redux/actions';


function FavoritesPag() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleRemoveFromFavorites = (movieId) => {
    // Dispatch an action to remove the movie from favorites
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className="container mt-5">
      {favorites.length === 0 ? (
        <p className="text-center">Your favorites is empty</p>
      ) : (
        <div className="container">
          <div className="row justify-content-around">
            {favorites.map((movie) => (
              <div key={movie.id} className="col-md-3 mb-4">
                <div className="card">
                  <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                    <img
                      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                      className="card-img-top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                  <div className="card-body">
                    <h3 className="card-title text-center">{movie.title}</h3>
                  </div>
                  
                    <button
                      className="btn btn-danger orange-button no-transition"
                      onClick={() => handleRemoveFromFavorites(movie.id)}
                    >
                      Remove from Favorites
                    </button>
                  </div>
               
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritesPag;
