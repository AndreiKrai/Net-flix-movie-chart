import axios from 'axios';
import { AuthContext } from 'context/auth.context';
import instance from 'helpers/axios';
import { reqwests } from 'helpers/reqwest';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import css from './SigninModal.module.css';

export default function SigninModal({ closeModal }) {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const { changeToken, changeSessionID, token, sessionId } =
    useContext(AuthContext);

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [closeModal]);

  const handleChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'email':
        setMail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data: tokenData } = await instance.get(reqwests.fetchToken);
      changeToken(tokenData['request_token']);

      const { data: sessionIdData } = await instance.post(
        reqwests.fetchCreateSession,
        { request_token: tokenData['request_token'] }
      );
      changeSessionID(sessionIdData);
      // console.log('sessionIdData', sessionIdData);

      setMail('');
      setPassword('');
    } catch (e) {
      console.log(e);
    }
  };
  const movie = {
    media_type: 'movie',
    media_id: 874355,
    favorite: true,
  };

  const handleGuest = async () => {
    const { data } = await instance.get(reqwests.fetchGuestSession);
    // changeSessionID(data['guest_session_id']);
    const sessionData = data['guest_session_id'];
    const { data: addToFavResponse } = await instance.post(
      reqwests.fetchAddToFavorete,
      movie,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        params: {
          session_id: sessionData,
        },
      }
    );
  };

  return (
    <div className={css.overlayModal}>
      <div className={css.modalDiv}>
        <form action="" className="" onSubmit={handleSubmit}>
          {/* Email input. */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Email
            </label>
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={handleChange}
              value={email}
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              Email Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Magni provident ad excepturi delectus sapiente architecto est
              velit
            </div>
          </div>
          {/* Password input. */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              value={password}
              type="password"
              className="form-control"
              name="password"
              id="password"
              required
            />
            <div id="emailHelp" className="form-text">
              Password Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cum dolore veniam dignissimos esse possimus
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="button"
            onClick={handleGuest}
            className="btn btn-primary"
          >
            Test
          </button>
        </form>
      </div>
    </div>
  );
}
