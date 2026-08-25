const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const caption = lightbox.querySelector('figcaption');
document.querySelectorAll('.photo-card').forEach((card) => card.addEventListener('click', () => {
  lightboxImage.src = card.dataset.image;
  lightboxImage.alt = card.dataset.alt;
  caption.textContent = card.dataset.caption;
  lightbox.showModal();
}));
lightbox.querySelector('.close-button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
