import { galleryItems } from './gallery-items.js';

const list = document.querySelector(".gallery");

const markup = galleryItems
    .map(({ preview, description, original }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source=${original}"
                alt="${description}"
                />
            </a>
        </li>`)
    .join("");

list.innerHTML = markup;

list.addEventListener("click", selectImg)

let modalInstance = null;

function selectImg(e) {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
    instance.show()

    modalInstance = instance;

    document.addEventListener("keydown", closeModalOnEscape);
}

function closeModalOnEscape(e) {
    if (e.code === "Escape" && modalInstance) {
        modalInstance.close();
        document.removeEventListener("keydown", closeModalOnEscape);
    }
}

