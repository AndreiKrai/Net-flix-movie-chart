// import { getMovieByName } from 'helpers/api';
// import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Banner from 'components/Banner/Banner';
import Row from 'components/Row/Row';
import { reqwests } from 'helpers/reqwest';
import MovieSlider from 'components/MovieSlider/MovieSlider';
// import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const [serchParams, setSerchParams] = useSearchParams();
  const query = serchParams.get('query') ?? '';
  const [input, setInput] = useState('');

  // const input=
  // useEffect(() => {
  //   if (query) {
  //     async function getMovieByNameAPI() {
  //       const data = await getMovieByName(query);
  //       setMovieList(data);
  //       setInput('');
  //     }
  //     getMovieByNameAPI();
  //   }
  // }, [query]);

  // const navigate=useNavigate()
  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSerchParams({ query: input });
  };

  return (
    <>
      <Banner isRandomMovie={true} />
      <div className="container-fluid p-5">
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            value={input}
            onChange={handleInput}
            className="form-control me-2"
            type="search"
            placeholder="Search some movie"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* {query && (
        <Row
          title="Search results"
          fetchURL={reqwests.fetchMovieByName(query)}
          isLargePicture={true}
        />
      )} */}
      <MovieSlider
        title="Search results"
        fetchURL={reqwests.fetchMovieByName(query)}
        isLargePicture={true}
      />

      {/* {movieList && <MovieList movieFromApi={movieList} header={null} />} */}
    </>
  );
}
