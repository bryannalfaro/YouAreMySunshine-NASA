import Urls from './urls.json';

export const fetchData = async (type, lat, lon) => {
  const response = await fetch(Urls[type].url.replace('{lat}', lat).replace('{lon}', lon));
  const data = await response.json();
  return data;
}