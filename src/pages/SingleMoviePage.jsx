import Banner from 'components/Banner/Banner';
import MovieSlider from 'components/MovieSlider/MovieSlider';
import Row from 'components/Row/Row';
import { reqwests } from 'helpers/reqwest';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

export default function SingleMoviePage() {
  const [isLoadind, setIsLoadind] = useState(true);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    async function getSingleMovieApi() {
      // const data = await getSingleMovie(movieId);
      // setMovie(data);
      setIsLoadind(false);
    }
    getSingleMovieApi();
  }, []);

  if (isLoadind) {
    return <p>Is loading</p>;
  }
  // const genresList = movie.genres.map(genre => genre.name);

  // const { title, poster_path, id, overview, vote_average } = movie;

  return (
    <div>
      <Banner isRandomMovie={false} /> <Outlet />
      <MovieSlider
        title="Movies are similar"
        fetchURL={reqwests.fetchSimilar(movieId)}
        isLargePicture={true}
      />
      {/* <Row
        title="Movies are similar"
        fetchURL={reqwests.fetchSimilar(movieId)}
        isLargePicture={true}
      /> */}
    </div>
  );
}
