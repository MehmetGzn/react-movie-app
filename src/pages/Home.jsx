import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { arrow_left } from 'react-icons-kit/ikons/arrow_left';
import { arrow_right } from 'react-icons-kit/ikons/arrow_right';
import Icon from 'react-icons-kit';
import MovieSlide from '../components/MovieSlide';

const apiKey = '6e6ffd4226cfa0b0d88c73bfdb8ed5c7';
const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const TOP_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [activate, setActivate] = useState('pop');

  const slider = (px, id) => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + px;
  };

  const handleTopRated = e => {
    setActivate('top');
    getMovies(TOP_API);
  };

  const handlePopular = e => {
    setActivate('pop');
    getMovies(POPULAR_API);
  };

  useEffect(() => {
    getMovies(POPULAR_API);
  }, []);

  const getMovies = API => {
    axios
      .get(API)
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  };

  return (
    <div className="home">
      <div className="movie-slider">
        <MovieSlide movies={movies.slice(0, 3)} slider={slider} />
      </div>
      <div className="movies">
        <header>
          <p
            className="pop-movies"
            id={activate === 'pop' ? 'act' : undefined}
            onClick={handlePopular}
          >
            POPULAR MOVIES
          </p>
          <p>|</p>
          <p
            className="top-movies"
            onClick={handleTopRated}
            id={activate === 'top' ? 'act' : undefined}
          >
            TOP RATED MOVIES
          </p>
        </header>
        <div className="slider">
          <Icon
            className="arrow-icons"
            icon={arrow_left}
            size={25}
            onClick={() => slider(-750, 'slide')}
          />
          <div id="slide" className="movie-cards">
            {movies?.slice(3, 19).map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
          <Icon
            className="arrow-icons"
            icon={arrow_right}
            size={20}
            onClick={() => slider(+750, 'slide')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
