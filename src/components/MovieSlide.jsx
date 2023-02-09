import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import { arrow_left } from 'react-icons-kit/ikons/arrow_left';
import { arrow_right } from 'react-icons-kit/ikons/arrow_right';

const IMG_API = 'https://image.tmdb.org/t/p/original';
const defaultImage =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MovieSlide = (movies, slider) => {
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
  const genres = movieArray.genres;
  console.log(genres);
  console.log(currentMovie);
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
            <h1>{currentMovie?.vote_average}</h1>
            <div className="percentage-bar">
              <div
                className="fill"
                style={{ width: `${currentMovie?.vote_average * 10}%` }}
              />
            </div>
          </div>
          <h3>{currentMovie?.overview}</h3>
        </div>
      </div>
      <div className="slide-over-top"></div>
      <img
        src={currentMovie ? IMG_API + currentMovie.poster_path : undefined}
        alt=""
      />
    </div>
  );
};

export default MovieSlide;
