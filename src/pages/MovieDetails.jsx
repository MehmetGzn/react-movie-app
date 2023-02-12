import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCasts, setMovieCasts] = useState([]);
  const [videoKey, setVideoKey] = useState();

  const {
    title,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    vote_count,
    overview,
    genres,
  } = movieDetails;

  const { id } = useParams();
  console.log(id, title);
  const apiKey = '6e6ffd4226cfa0b0d88c73bfdb8ed5c7';
  const movieDetailBaseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const movieCreditsBaseURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
  const movieImageUrl = `https://image.tmdb.org/t/p/original`;
  const defaultImage =
    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

  useEffect(() => {
    axios
      .get(movieDetailBaseURL)
      .then(res => setMovieDetails(res.data))
      .catch(err => console.log(err));
    axios
      .get(videoUrl)
      .then(res => setVideoKey(res.data.results[0].key))
      .catch(err => console.log(err));
  }, [movieDetailBaseURL, videoUrl]);

  useEffect(() => {
    axios
      .get(movieCreditsBaseURL)
      .then(res => setMovieCasts(res.data.cast))
      .catch(err => console.log(err));
  }, [movieCreditsBaseURL]);

  return (
    <div className="movie-details">
      <div
        className="img-div"
        style={{
          backgroundImage: `url(${movieImageUrl + backdrop_path})`,
        }}
      >
        <div className="shadow-div"></div>
      </div>
      <div className="over-img">
        <div className="back-top">
          <img className="movie-img" src={movieImageUrl + poster_path} alt="" />
          <div className="movie-info">
            <h1>{title}</h1>
            <div className="vote">
              <h2>{vote_average?.toFixed(2)}</h2>
              <div className="percentage-bar">
                <div
                  className="fill"
                  style={{ width: `${vote_average * 10}%` }}
                />
              </div>
            </div>
            <div className="genres">
              {genres &&
                genres.slice(0, 5).map((genre, i) => (
                  <span className="genre" key={i}>
                    {genre.name}
                  </span>
                ))}
            </div>
            <div className="overview">
              <p>{overview}</p>
            </div>
            <div className="casts-div">
              <h3 className="cast-header">Casts</h3>
              <div className="cast-div">
                {movieCasts.slice(0, 5).map((cast, i) => (
                  <div className="casts" key={i}>
                    <img
                      src={
                        cast.profile_path
                          ? movieImageUrl + cast.profile_path
                          : defaultImage
                      }
                      className="cast-img"
                      alt="..."
                    />

                    <h5 className="cast-title">{cast.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="back-bot">
          <VideoSection videoKey={videoKey} title={title} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

{
  /* <div className="over-img">
  
  
</div> */
}
