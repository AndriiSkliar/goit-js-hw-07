import { galleryItems } from './gallery-items.js';

const list = document.querySelector(".gallery");

const markup = galleryItems
    .map(({ preview, description, original }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`)
    .join("");

list.innerHTML = markup;

let lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: "alt", 
    captionDelay: 250, 
});