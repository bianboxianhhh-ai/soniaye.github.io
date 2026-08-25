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

const book = document.querySelector('.album-book');
const openBook = book.querySelector('.open-book');
const cover = book.querySelector('.book-cover');
const pagesPanel = book.querySelector('.book-pages');
const pages = [...book.querySelectorAll('.book-page')];
const pageCount = book.querySelector('.page-count');
let currentPage = 0;

function showPage(index) {
  currentPage = (index + pages.length) % pages.length;
  pages.forEach((page, pageIndex) => page.classList.toggle('active', pageIndex === currentPage));
  pageCount.textContent = `${currentPage + 1} / ${pages.length}`;
}

openBook.addEventListener('click', () => {
  cover.hidden = true;
  pagesPanel.hidden = false;
  showPage(0);
});

book.querySelector('.previous').addEventListener('click', () => showPage(currentPage - 1));
book.querySelector('.next').addEventListener('click', () => showPage(currentPage + 1));
