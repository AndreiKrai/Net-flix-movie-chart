import instance from 'helpers/axios';
import { reqwests } from 'helpers/reqwest';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function ActorPage() {
  const params = useParams();
  const [actor, setActor] = useState({});
  const actorsId = params.actorsId;
  const location = useLocation();

  useEffect(() => {
    async function getActorApi() {
      try {
        const { data } = await instance(reqwests.fetchActor(actorsId));
        setActor(data);
      } catch (e) {
        console.log(e);
      }
    }
    getActorApi();
  }, [setActor, actorsId]);

  const { name, birthday, biography, profile_path } = actor;

  return (
    <div>
      <>
        <div className="card d-flex flex-row p-2 ">
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            className="card-img-top w-25 img-fluid"
            alt={`${name}`}
          />
          <div className="card-body">
            <h2 className="card-title">{`${name}`}</h2>
            <p className="card-text">{`Birthday ${birthday}`}</p>
            <h3 className="card-title">Biography</h3>
            <p className="card-text">{`${biography}`}</p>
            <Link
              to={`${location.state?.from?.pathname}`}
              className="btn btn-primary"
            >
              Go back
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
