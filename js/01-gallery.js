import { galleryItems } from './gallery-items.js';

const list = document.querySelector(".gallery");

const markup = galleryItems
    .map(({ preview, description, original }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`)
    .join("");

list.innerHTML = markup;

list.addEventListener("click", selectImg)

function selectImg(e) {
    e.preventDefault();

    const { target } = e;

    if (target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => window.addEventListener("keydown", closeModalOnEscape),
            onClose: () => window.removeEventListener("keydown", closeModalOnEscape),
        }
    );
    instance.show();

    function closeModalOnEscape(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    }
}


