import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import { arrow_left } from 'react-icons-kit/ikons/arrow_left';
import { arrow_right } from 'react-icons-kit/ikons/arrow_right';
import { useNavigate } from 'react-router-dom';

const IMG_API = 'https://image.tmdb.org/t/p/original';
const defaultPoster =
  'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80';

const MovieSlide = movies => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const slideIndexInc = () => {
    if (2 > index) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const slideIndexDec = () => {
    if (0 < index) {
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  };

  const movieArray = movies.movies;
  const currentMovie = movieArray[index];

  return (
    <div className="movie-slide">
      <Icon
        className="slide-icons left"
        icon={arrow_left}
        size={35}
        onClick={slideIndexDec}
      />
      <Icon
        className="slide-icons right"
        icon={arrow_right}
        size={35}
        onClick={slideIndexInc}
      />
      <div className="slide-over-left">
        <div className="movie-info">
          <h1>{currentMovie?.original_title}</h1>
          <div className="vote">
            <h1>{currentMovie?.vote_average.toFixed(2)}</h1>
            <div className="percentage-bar">
              <div
                className="fill"
                style={{ width: `${currentMovie?.vote_average * 10}%` }}
              />
            </div>
          </div>
          <h3>{currentMovie?.overview}</h3>
          <button
            className="view-button"
            onClick={() => navigate('details/' + currentMovie?.id)}
          >
            View More
          </button>
        </div>
      </div>
      <div className="slide-over-top"></div>
      <img
        src={
          currentMovie && currentMovie.backdrop_path
            ? IMG_API + currentMovie.poster_path
            : defaultPoster
        }
        alt="..."
      />
    </div>
  );
};

export default MovieSlide;
