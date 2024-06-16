import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery } from './js/render-functions';
import { getImg } from './js/pixabay-api';


const formEl = document.querySelector('.form');
const imgEl = document.querySelector('.nav-list');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const value = e.target.elements.search.value.trim();
  getImg(value)
    .then(data => {
      const markup = gallery(data.hits);
      imgEl.innerHTML = markup;
      let lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh()

});
    })
    .catch(error => console.error(error));









