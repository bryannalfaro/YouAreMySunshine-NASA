import Urls from './urls.json';

export const fetchData = async (type) => {
  const response = await fetch(Urls[type].url);
  const data = await response.json();
  return data;
}