import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");

  const link = document.createElement("a");
  link.classList.add("gallery__item");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);
  return galleryItem;
}
const galleryList = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox(".gallery a.gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
