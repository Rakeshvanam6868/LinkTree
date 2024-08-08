import axios from 'axios';
import store from '../../store';

const ApiService = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 5000,
});

ApiService.interceptors.request.use(async (config) => {
  const { access_token } = store.getState().auth;

  if (access_token !== null) {
    config.headers.Authorization = `Bearer ${access_token}`;
    
    const baseURL = config.baseURL ?? '';
    const url = config.url ?? '';
    
    console.debug('[Request]', baseURL + url, JSON.stringify(access_token));
  }
  
  return config;
});



export function fetcher<T = any>(url: string) {
  return ApiService.get<T>(url).then((res) => res.data);
}

export default ApiService;
