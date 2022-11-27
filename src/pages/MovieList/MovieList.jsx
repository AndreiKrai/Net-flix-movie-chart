import MovieListItem from 'components/MovieListItem/MovieListItem';

export default function MovieList({movieFromApi, header}) {

  // useEffect(() => {    
  // async function getTrendingArray() {
  //     const data =await funcAPI();
  //     setMovies(data);
  //     console.log(data)
  //   };
  //   getTrendingArray()
  // }, [funcAPI]);

  return (
    <div className=" card-body">
      <h1>{header}</h1>
      <div className="list-group">
        <ul>
        {movieFromApi.map(movie=>( <MovieListItem key={movie.id} id={movie.id} title={movie.title}/>))}
          
        
        {/* <li><Link to="/" className="list-group-item list-group-item-action">
          A second link item
        </Link></li> */}
        </ul>
        
        
      </div>
    </div>
  );
}