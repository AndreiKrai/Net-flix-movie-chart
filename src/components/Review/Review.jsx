import { getReviews } from 'helpers/api';
import instance from 'helpers/axios';
import { reqwests } from 'helpers/reqwest';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Review.module.css';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    async function getReviewsApi() {
      try {
        const { data } = await instance(reqwests.fetchReview(movieId));
        setReviews(data.results);
      } catch (e) {}
    }
    getReviewsApi();
  }, [movieId]);

  return (
    reviews &&
    reviews.map(({ author, content, id }) => {
      return (
        <div className={css.card} key={id}>
          <h2 className={css.title}>{`${author}`}</h2>
          <p className={css.description}>{`${content}`}</p>
        </div>
      );
    })
  );
}
