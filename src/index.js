import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import AuthProvider from 'context/auth.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Net-flix-movie-chart">
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
