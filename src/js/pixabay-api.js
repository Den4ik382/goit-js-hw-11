const API_KEY = '43854532-e18365a3905b9485abf8e557c';
const BASE_URL = 'https://pixabay.com/api/';

export const searchParams = wordSearch => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: wordSearch,
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    console.log(response.json());
  });
};
