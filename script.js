const words = ["developer", "designer"];
const el = document.getElementById("typed-word");
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (typing) {
    if (charIndex < currentWord.length) {
      el.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        typing = false;
        setTimeout(typeEffect, 400);
      }, 1200);
    }
  } else {
    if (charIndex > 0) {
      el.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      typing = true;
      setTimeout(typeEffect, 300);
    }
  }
}

typeEffect();
// Фотографии для каждого проекта
const hotelPhotos = [
    'images/work 1/azimutimg1.png',
    'images/work 1/azimutimg2.png',
    'images/work 1/azimutimg3.png',
    'images/work 1/azimutimg4.png',
    'images/work 1/azimutimg5.png',
    'images/work 1/azimutimg6.png'
];
const portfolioPhotos = [
    'images/work 2/img1.png',
    'images/work 2/img2.png',
    'images/work 2/img3.png'
];
const weatherPhotos = [
    'images/work 3/weatherwork1.png',
    'images/work 3/weatherwork2.png',
    'images/work 3/weatherwork3.png'
];

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

let weatherIndex = 0;
const weatherModal = document.getElementById('modalWeather');
const weatherBtn = document.getElementById('openModalBtnWeather');
const weatherClose = weatherModal.querySelector('.close');
const weatherSliderImg = weatherModal.querySelector('.slider-img');
const weatherLeft = weatherModal.querySelector('.arrow.left');
const weatherRight = weatherModal.querySelector('.arrow.right');

weatherBtn.onclick = () => {
    weatherIndex = 0;
    weatherSliderImg.src = weatherPhotos[weatherIndex];
    weatherModal.style.display = 'block';
};
weatherClose.onclick = () => weatherModal.style.display = 'none';
weatherModal.onclick = e => {
    if (!weatherModal.querySelector('.modal-content').contains(e.target)) weatherModal.style.display = 'none';
};
weatherLeft.onclick = () => {
    weatherIndex = (weatherIndex - 1 + weatherPhotos.length) % weatherPhotos.length;
    weatherSliderImg.src = weatherPhotos[weatherIndex];
};
weatherRight.onclick = () => {
    weatherIndex = (weatherIndex + 1) % weatherPhotos.length;
    weatherSliderImg.src = weatherPhotos[weatherIndex];
};


const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    toTopBtn.style.display = 'flex';
  } else {
    toTopBtn.style.display = 'none';
  }
});

toTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


