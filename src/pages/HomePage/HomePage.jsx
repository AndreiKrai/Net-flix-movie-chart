import { getDataFromAPI } from 'helpers/api';
import MovieList from 'components/MovieList/MovieList';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { useState, useEffect } from 'react';
import Row from 'components/Row/Row';
import { reqwests } from 'helpers/reqwest';
import Banner from 'components/Banner/Banner';
import MovieSlider from 'components/MovieSlider/MovieSlider';

export default function HomePage() {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingArray() {
      try {
        const data = await getDataFromAPI();
        setTrendingMovie(data);
      } catch (error) {
        setError(error);
      }
    }
    getTrendingArray();
  }, []);

  return (
    <>
      <Banner isRandomMovie={true} />
      <MovieSlider
        fetchURL={reqwests.fetchTrending}
        title="Trending Today"
        isLargePicture={true}
      />
      <MovieSlider title="Top raiting" fetchURL={reqwests.fetchTopRaiting} />
      <MovieSlider title="Upcoming" fetchURL={reqwests.fetchUpcoming} />
      {error && <NotFoundPage />}
      {/* <MovieList movieFromApi={trendingMovie} header={'Trending today'} /> */}
    </>
  );
}
