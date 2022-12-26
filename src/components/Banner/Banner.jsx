import TrailerModal from 'components/TrailerModal/TrailerModal';
import { reqwests } from 'helpers/reqwest';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from '../../helpers/axios';
import css from './Banner.module.css';

const {
  banner,
  banner_content,
  banner_title,
  banner_description,
  banner_button,
  fadeBottom,
} = css;
export default function Banner({ isRandomMovie }) {
  const [movie, setMovie] = useState([]);
  const [trailerMovieName, setTrailerMovieName] = useState('');
  // console.log(trailerMovieName);
  const params = useParams();
  const movieId = params.movieId;
  const location = useLocation();

  useEffect(() => {
    async function fetchDataFromAPI() {
      if (isRandomMovie) {
        const { data } = await axios.get(reqwests.fetchTrending);
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      } else {
        const { data } = await axios.get(reqwests.fetchSingleMovie(movieId));
        setMovie(data);
      }
    }
    fetchDataFromAPI();
  }, [isRandomMovie, movieId]);

  function truncate(str, maxlength) {
    return str?.length > maxlength ? str?.slice(0, maxlength - 1) + '…' : str;
  }
  const handleClick = movie => {
    // console.log('movie', movie);

    setTrailerMovieName(movie?.title || movie?.original_title);
    // console.log('trailerMovieName', trailerMovieName);
  };

  const closeModal = () => setTrailerMovieName('');

  return (
    <header
      className={banner}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center',
      }}
    >
      <div className={banner_content}>
        <h1 className={banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons"></div>
        {isRandomMovie && (
          <button
            type="button"
            className={banner_button}
            onClick={() => handleClick(movie)}
          >
            Watch trailer
          </button>
        )}
        {!isRandomMovie && (
          <Link to={`reviews`} className={banner_button} state={location.state}>
            Reviews
          </Link>
        )}
        {!isRandomMovie && (
          <Link to={'casts'} className={banner_button} state={location.state}>
            Casts
          </Link>
        )}

        <h2 className={banner_description}>
          {isRandomMovie ? truncate(movie?.overview, 150) : movie?.overview}
        </h2>
      </div>
      <div className={fadeBottom}></div>
      {trailerMovieName && (
        <TrailerModal movieName={trailerMovieName} closeModal={closeModal} />
      )}
    </header>
  );
}
