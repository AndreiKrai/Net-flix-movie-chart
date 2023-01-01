import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Nav from './Nav/Nav';
// import { useContext } from 'react';
// import { AuthContext } from 'context/auth.context';

const SearchForm = lazy(() => import('../pages/SearchPage/SearchForm'));
const SingleMoviePage = lazy(() => import('pages/SingleMoviePage'));
const Casts = lazy(() => import('components/Casts/Casts'));
const Review = lazy(() => import('components/Review/Review'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ActorPage = lazy(() => import('pages/ActorPage/ActorPage'));

export const App = () => {
  // const context = useContext(AuthContext);
  // const { changeToken } = context;
  // changeToken();
  return (
    <div className="app">
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<SearchForm />} />

          <Route path="movies/:movieId" element={<SingleMoviePage />}>
            <Route path="casts" element={<Casts />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="actor/:actorsId" element={<ActorPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
