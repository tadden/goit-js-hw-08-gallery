import galleryItems from './app.js';

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
const closeModalBtn = document.querySelector('.lightbox__button');


const creatingGallery =  galleryItems.map((item) => {
    return `<li class="gallery__item" >
      <a class="gallery__link" href="${item.original}" >
      <img
      class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}";
       alt="${item.description}"
     />
      </a>
      </li>`;
}).join('');
  
gallery.insertAdjacentHTML('beforeend', creatingGallery);


function openModal(evt) {
    evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  };
    lightbox.classList.add('is-open');
    lightboxImg.setAttribute('src', evt.target.dataset.source)
}

function closeModal(evt) { 
  if (evt.target.classList.contains('lightbox__button') || evt.target.classList.contains('lightbox__overlay') || evt.key === 'Escape' ) {
      lightbox.classList.remove('is-open');
      lightboxImg.removeAttribute('src')
    }
}

gallery.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal); 
overlay.addEventListener('click', closeModal);




