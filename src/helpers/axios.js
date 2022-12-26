import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: '08cfb1cba341ef968995af439d190569' },
});

export default instance;
