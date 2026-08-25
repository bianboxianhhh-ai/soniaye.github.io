const lightbox = document.querySelector('.lightbox');
const image = lightbox.querySelector('img');
const caption = lightbox.querySelector('figcaption');
document.querySelectorAll('.polaroid').forEach((photo) => photo.addEventListener('click', () => {
  image.src = photo.dataset.image;
  image.alt = photo.querySelector('img').alt;
  caption.textContent = photo.dataset.caption;
  lightbox.showModal();
}));
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
