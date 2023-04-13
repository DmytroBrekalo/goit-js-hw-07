import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const imgEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
			<a class="gallery__link" href="${original}">
				<img class="gallery__image" src=${preview} data-source="${original}" alt=${description}></img>
			</a>
        </li>    
		`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imgEl);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
