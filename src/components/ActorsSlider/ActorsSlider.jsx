import React, { useEffect, useState } from 'react';
import '../../../node_modules/slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import instance from 'helpers/axios';
import './ActorsSlider.css';
import Slider from 'react-slick';

const BASE_URL = `https://image.tmdb.org/t/p/original`;

export default function ActorsSlider({ title, fetchURL }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await instance.get(fetchURL);
      setActors(data.cast);
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
      <h2>{title}</h2>
      <div className="sliderWrapper">
        <Slider {...settings}>
          {actors?.map(movie => (
            <Link
              className={`row_poster row_poster_large row_link`}
              // state={{ from: location }}
              // тут створили сткйт і прив'язали адресу з якої прийшли
              key={movie.cast_id}
              to={`/actor/${movie.id}`}
              aria-current="true"
            >
              <img
                className="row_img"
                src={`${BASE_URL}${movie.profile_path}`}
                alt={movie.name || movie.original_name}
              />
              {/* <div className="row_description_wraper"> */}
              <p className="row_description">
                {movie.name || movie.original_name}
              </p>
              {/* </div> */}
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
