const API_KEY = '43854532-e18365a3905b9485abf8e557c';
const BASE_URL = 'https://pixabay.com/api/';

export default function getImages(searchWord) {
  const searchList = new URLSearchParams({
    key: `${API_KEY}`,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchList}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
