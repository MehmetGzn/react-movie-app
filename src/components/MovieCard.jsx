import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const defaultImage =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MovieCard = movie => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="movie-card"
        onClick={() => navigate('details/' + movie.id)}
      >
        <div className="movie-card-over">
          <div className="title-div">
            <h2>{movie.vote_average}</h2>
            <h1>{movie.original_title}</h1>
          </div>
          <div className="card-bar"></div>
        </div>
        <img
          className="card-img"
          src={movie.poster_path ? IMG_API + movie.poster_path : defaultImage}
          alt="..."
        />
      </div>
    </div>
  );
};

export default MovieCard;
