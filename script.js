const startButton = document.querySelector('#startButton');
const welcome = document.querySelector('#welcome');
const desk = document.querySelector('#desk');

startButton.addEventListener('click', () => {
  welcome.hidden = true;
  desk.hidden = false;
});

document.querySelectorAll('.desk-object').forEach((object) => {
  object.addEventListener('click', () => document.querySelector(`#${object.dataset.dialog}`).showModal());
});

document.querySelectorAll('.dialog-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog').close());
});

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
document.querySelectorAll('.photo-card').forEach((card) => {
  card.addEventListener('click', () => {
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = card.querySelector('img').alt;
    lightboxCaption.textContent = card.dataset.caption;
    lightbox.showModal();
  });
});
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());

const boothPages = [...document.querySelectorAll('.booth-page')];
const boothCount = document.querySelector('.booth-count');
let boothIndex = 0;
function showBoothPage(index) {
  boothIndex = (index + boothPages.length) % boothPages.length;
  boothPages.forEach((page, pageIndex) => page.classList.toggle('active', pageIndex === boothIndex));
  boothCount.textContent = `${boothIndex + 1} / ${boothPages.length}`;
}
document.querySelector('.booth-nav.previous').addEventListener('click', () => showBoothPage(boothIndex - 1));
document.querySelector('.booth-nav.next').addEventListener('click', () => showBoothPage(boothIndex + 1));

const travelTag = document.querySelector('#travelTag');
const travelPocket = document.querySelector('#travelPocket');
travelTag.addEventListener('click', () => { travelPocket.hidden = !travelPocket.hidden; });
travelPocket.querySelector('.close-pocket').addEventListener('click', () => { travelPocket.hidden = true; });

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
});
