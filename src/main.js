import checkImage from './js/render-functions';

const searchForm = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
searchForm.addEventListener('submit', checkImage);
