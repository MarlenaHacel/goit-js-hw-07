import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__link");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.setAttribute("data-source", item.original);
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

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const imageSource = event.target.getAttribute("data-source");
    const lightbox = basicLightbox.create(
      `<img src="${imageSource}" alt="Image">`
    );
    lightbox.show();
  }
});
