import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.currentTarget.elements.search.value.trim();

  if (!query) {
    return;
  }

  clearGallery(gallery);
  loader.classList.remove('hidden');

  getImagesByQuery(query)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      gallery.insertAdjacentHTML('beforeend', createGallery(images));

      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong!',
        position: 'topRight',
      });

      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
