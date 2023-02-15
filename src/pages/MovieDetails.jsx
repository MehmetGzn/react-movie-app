import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCasts, setMovieCasts] = useState([]);
  const [videoKey, setVideoKey] = useState();
  const [loading, setLoading] = useState(false);

  const {
    title,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const movieCreditsBaseURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const movieImageUrl = `https://image.tmdb.org/t/p/original`;
  const defaultImage =
    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
  const defaultCastImage = 'https://openclipart.org/image/2000px/307452';
  const defaultPoster =
    'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80';

  useEffect(() => {
    setLoading(true);
    axios
      .get(movieDetailBaseURL)
      .then(res => setMovieDetails(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
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
    <>
      {loading ? (
        <div className="loading-div">
          <p>Loading...</p>
          <img
            src="https://www.aquaholic.com.bd/img/loadloop.gif"
            alt="spinner"
          />
        </div>
      ) : (
        <div className="movie-details">
          <div
            className="img-div"
            style={{
              backgroundImage: `url(${
                backdrop_path ? movieImageUrl + backdrop_path : defaultPoster
              })`,
            }}
          >
            <div className="shadow-div"></div>
          </div>
          <div className="over-img">
            <div className="back-top">
              <div className="movie-img-div">
                <img
                  className="movie-img"
                  src={poster_path ? movieImageUrl + poster_path : defaultImage}
                  alt="..."
                />
              </div>
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
                <div className="released">
                  <p>
                    <b> Release Date :</b> {release_date}
                  </p>
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
                              : defaultCastImage
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
      )}
    </>
  );
};

export default MovieDetails;
