import React from 'react';
import YouTube from 'react-youtube';
import { useEffect } from 'react';
import css from './TrailerModal.module.css';
// const movieTrailer = require('movie-trailer');

export default function TrailerModal({ trailerMovieName, closeModal }) {
  // const [trailerUrl, setTrailerUrl] = useState('');

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

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };
  //   console.log(movieTrailer(trailerMovieName));
  //   movieTrailer(trailerMovieName)
  //     .then(url => {
  //       // https://www.youtube.com/watch?v=XtMThy8QKqU
  //       const urlParams = new URLSearchParams(new URL(url).search);
  //       setTrailerUrl(urlParams.get('v'));
  //       console.log('trailerUrl', trailerUrl);
  //       // v-значення в строці пошуку Ютуб URL
  //     })
  //     .catch(error => console.log(error));

  const opts = {
    height: '400',
    width: '720',
    playerVars: { autoplay: 1 },
  };

  return (
    <div className={css.overlayModal} onClick={handleClick}>
      <div className={css['modal-div']}>
        <YouTube videoId="AiohkY_XQYQ" opts={opts} />
      </div>
    </div>
  );
}
