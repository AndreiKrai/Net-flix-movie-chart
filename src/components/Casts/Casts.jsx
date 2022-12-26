import ActorsSlider from 'components/ActorsSlider/ActorsSlider';
import Row from 'components/Row/Row';
import { getCasts } from 'helpers/api';
import { reqwests } from 'helpers/reqwest';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function Casts() {
  const [casts, setCasts] = useState();
  const params = useParams();
  const movieId = params.movieId;
  const location = useLocation();

  // useEffect(() => {
  //   async function getCastsApi() {
  //     const data = await getCasts(movieId);
  //     setCasts(data);
  //   }
  //   getCastsApi();
  // }, [movieId]);

  return (
    <ActorsSlider title="Casts" fetchURL={reqwests.fetchCasts(movieId)} />
    // casts &&
    // casts.cast.map(({ character, name, profile_path, id }) => (
    //   <div key={id} className="card d-flex flex-row p-2">
    //     <img
    //       src={`https://image.tmdb.org/t/p/w500${profile_path}`}
    //       className="card-img-top w-25 "
    //       alt={`${name}`}
    //     />
    //     <div className="card-body">
    //       <p className="card-text">{`Name ${name}`}</p>
    //       <p className="card-text">{`Character ${character}`}</p>
    //       {
    //         <Link
    //           to={`/actor/${id}`}
    //           className="btn btn-primary"
    //           state={{ from: location }}
    //         >
    //           Find more...
    //         </Link>
    //       }
    //     </div>
    //   </div>
    // ))
  );
}
