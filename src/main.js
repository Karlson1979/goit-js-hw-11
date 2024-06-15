import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const imgEl = document.querySelector('.nav-list');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const value = e.target.elements.search.value;
  getImg(value)
    .then(data => {
      const markup = gallery(data.hits);
      imgEl.innerHTML = markup;
    })
    .catch(error => console.error(error));
});

function getImg(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44403468-b3192a3f07a9f4ae6c998e95a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.hits.length) {
        throw new Error('No images found');
      }
      return data;
    });
}

function gallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `


      <li class="item">
  <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
    <img src="${webformatURL}" alt="${tags}" width="360" height="170">
  </a>
  <div class="statistic">
    <p>Likes:<br> <span>${likes}</span></p>
    <p>Views:<br> <span>${views}</span></p>
    <p>Comments:<br> <span>${comments}</span></p>
    <p>Downloads:<br> <span>${downloads}</span></p>
  </div>
</li>



  `
    )
    .join('');
}
