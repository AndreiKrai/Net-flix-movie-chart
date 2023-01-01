import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import instance from 'helpers/axios';
import './Slider.css';
import Slider from 'react-slick';

const BASE_URL = `https://image.tmdb.org/t/p/original`;

export default function MovieSlider({ title, fetchURL, isLargePicture }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await instance.get(fetchURL);
      setMovies(data.results);
      return data;
    }
    fetchData();
  }, [fetchURL]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="row">
      {Boolean(movies.length) && <h2>{title}</h2>}
      <div className="sliderWrapper">
        <Slider {...settings}>
          {movies.map(movie => (
            <Link
              className={`'row_poster' ${isLargePicture && 'row_poster_large'}`}
              // state={{ from: location }}
              // тут створили сткйт і прив'язали адресу з якої прийшли
              key={movie.id}
              to={`/movies/${movie.id}`}
              aria-current="true"
            >
              <img
                className="row_img"
                src={`${BASE_URL}${
                  isLargePicture ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
