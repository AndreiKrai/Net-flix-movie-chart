import instance from 'helpers/axios';
// import movieTrailer from 'movie-trailer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import YouTube from 'react-youtube';
import css from './Row.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { row, row_poster, row_posters, row_poster_large } = css;
const BASE_URL = `https://image.tmdb.org/t/p/original`;

export default function Row({
  title,
  fetchURL,
  isLargePicture,
  sliderWrapper,
}) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const { data } = await instance.get(fetchURL);
      console.log(data);
      setMovies(data.results);
      return data;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className={row}>
      <h2>{title}</h2>
      <div className={sliderWrapper}>
        <div className={row_posters}>
          {movies.map(movie => (
            <Link
              className={`${row_poster} ${isLargePicture && row_poster_large}`}
              state={{ from: location }}
              // тут створили сткйт і прив'язали адресу з якої прийшли
              key={movie.id}
              to={`/movies/${movie.id}`}
              aria-current="true"
            >
              <img
                src={`${BASE_URL}${
                  isLargePicture ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              />
            </Link>
          ))}
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
}
