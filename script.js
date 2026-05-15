// Фотографии для каждого проекта
const hotelPhotos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg'
];
const portfolioPhotos = [
    'images/img1.png',
    'images/img2.png',
    'images/img3.png'
];
//--- Contacts modal--- 
const openBtn = document.getElementById('openBtnModalContacts');
const modal = document.getElementById('contactsModal');
const closeBtn = modal.querySelector('.close');
const modalContent = modal.querySelector('.modal-content');

// Открытие модального окна
openBtn.onclick = function() {
  modal.style.display = 'block';
}

// Закрытие по крестику
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Закрытие по клику вне окна
modal.onclick = function(event) {
  if (!modalContent.contains(event.target)) {
    modal.style.display = 'none';
  }
}

// --- HOTEL MODAL ---
let hotelIndex = 0;
const hotelModal = document.getElementById('modalHotel');
const hotelBtn = document.getElementById('openModalBtnHotel');
const hotelClose = hotelModal.querySelector('.close');
const hotelSliderImg = hotelModal.querySelector('.slider-img');
const hotelLeft = hotelModal.querySelector('.arrow.left');
const hotelRight = hotelModal.querySelector('.arrow.right');

hotelBtn.onclick = () => {
    hotelIndex = 0;
    hotelSliderImg.src = hotelPhotos[hotelIndex];
    hotelModal.style.display = 'block';
};
hotelClose.onclick = () => hotelModal.style.display = 'none';
hotelModal.onclick = e => {
    if (!hotelModal.querySelector('.modal-content').contains(e.target)) hotelModal.style.display = 'none';
};
hotelLeft.onclick = () => {
    hotelIndex = (hotelIndex - 1 + hotelPhotos.length) % hotelPhotos.length;
    hotelSliderImg.src = hotelPhotos[hotelIndex];
};
hotelRight.onclick = () => {
    hotelIndex = (hotelIndex + 1) % hotelPhotos.length;
    hotelSliderImg.src = hotelPhotos[hotelIndex];
};

// --- PORTFOLIO MODAL ---
let portfolioIndex = 0;
const portfolioModal = document.getElementById('modalPortfolio');
const portfolioBtn = document.getElementById('openModalBtnPortfolio');
const portfolioClose = portfolioModal.querySelector('.close');
const portfolioSliderImg = portfolioModal.querySelector('.slider-img');
const portfolioLeft = portfolioModal.querySelector('.arrow.left');
const portfolioRight = portfolioModal.querySelector('.arrow.right');

portfolioBtn.onclick = () => {
    portfolioIndex = 0;
    portfolioSliderImg.src = portfolioPhotos[portfolioIndex];
    portfolioModal.style.display = 'block';
};
portfolioClose.onclick = () => portfolioModal.style.display = 'none';
portfolioModal.onclick = e => {
    if (!portfolioModal.querySelector('.modal-content').contains(e.target)) portfolioModal.style.display = 'none';
};
portfolioLeft.onclick = () => {
    portfolioIndex = (portfolioIndex - 1 + portfolioPhotos.length) % portfolioPhotos.length;
    portfolioSliderImg.src = portfolioPhotos[portfolioIndex];
};
portfolioRight.onclick = () => {
    portfolioIndex = (portfolioIndex + 1) % portfolioPhotos.length;
    portfolioSliderImg.src = portfolioPhotos[portfolioIndex];
};