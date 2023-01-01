import { reqwests } from 'helpers/reqwest';
import Banner from 'components/Banner/Banner';
import MovieSlider from 'components/MovieSlider/MovieSlider';

export default function HomePage() {
  // useEffect(() => {
  //   async function getTrendingArray() {
  //     try {
  //       const data = await getDataFromAPI();
  //       setTrendingMovie(data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   }
  //   getTrendingArray();
  // }, []);

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
      {/* <MovieList movieFromApi={trendingMovie} header={'Trending today'} /> */}
    </>
  );
}
