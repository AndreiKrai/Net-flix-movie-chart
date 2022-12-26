import SigninModal from 'components/SigninModal/SigninModal';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './Nav.module.css';

const { disabled, nav_dark, nav, nav_logo, nav_list, nav_link } = css;
export default function Nav() {
  const [show, setShow] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, []);
  const handleSigninClick = () => {
    setIsSigninModalOpen(true);
  };
  const handleCloseSiginModal = () => {
    setIsSigninModalOpen(false);
  };
  return (
    <>
      <div className={`${nav} ${show && nav_dark}`}>
        <Link to="/" className={`${disabled} ${nav_logo}`}>
          Net-flix
        </Link>
        {/* <p ></p> */}
        {/* <img className={nav_logo} src={logo} alt="logo" /> */}
        <div>
          <ul className={nav_list}>
            <li>
              <NavLink className={nav_link} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={nav_link} to="movies">
                Movies
              </NavLink>
            </li>
            <button type="button" onClick={handleSigninClick}></button>
            {isSigninModalOpen && (
              <SigninModal closeModal={handleCloseSiginModal} />
            )}
          </ul>
        </div>
      </div>
      <Outlet />{' '}
    </>
  );
}
