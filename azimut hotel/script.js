document.addEventListener('DOMContentLoaded', function() {
  // --- Основная форма ---
  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    const room = document.getElementById('room').value;

    const result = document.createElement('div');
    result.style.marginTop = "20px";
    result.style.background = "#fffbe8";
    result.style.padding = "16px";
    result.style.borderRadius = "8px";
    result.innerHTML = `
      <b>Свободные номера:</b><br>
      <ul>
        <li>Тип номера: ${room === "" ? 'не выбран' : room}</li>
        <li>Заезд: ${checkin}</li>
        <li>Выезд: ${checkout}</li>
        <li>Гостей: ${guests}</li>
      </ul>
      <button id="showBookingModalBtn" style="background:#584418;color:#fff;padding:8px 16px;border:none;border-radius:6px;cursor:pointer;">Забронировать</button>
    `;
    const oldResult = document.getElementById('bookingResult');
    if (oldResult) oldResult.remove();
    result.id = 'bookingResult';
    document.querySelector('.booking-bar').appendChild(result);

    // --- Навешиваем обработчик на динамически созданную кнопку ---
    result.querySelector('#showBookingModalBtn').addEventListener('click', function() {
      document.getElementById('bookingModal').style.display = 'block';
      document.getElementById('modalResult').innerHTML = '';
    });
  });

  // --- Обработчик выбора способа оплаты ---
  const paymentSelect = document.getElementById('payment');
  const cardGroup = document.getElementById('cardNumberGroup');
  const cardNumberInput = document.getElementById('cardNumber');

  // --- КОД ДЛЯ ПОКАЗА КНОПКИ "ОПЛАТИТЬ" ---
  cardNumberInput.addEventListener('input', function() {
    const payBtn = document.getElementById('payBtn');
    if (this.value.replace(/\s/g, '').length >= 16) {
      payBtn.style.display = 'block';
    } else {
      payBtn.style.display = 'none';
    }
  });

  paymentSelect.addEventListener('change', function() {
    if (this.value === 'card') {
      cardGroup.style.display = 'flex';
      cardNumberInput.required = true;
    } else {
      cardGroup.style.display = 'none';
      cardNumberInput.required = false;
      document.getElementById('payBtn').style.display = 'none';
    }
  });

  document.getElementById('payBtn').addEventListener('click', function(e) {
  e.preventDefault();

  this.style.display = 'none';
  const loaderDiv = document.getElementById('loader');
  loaderDiv.innerHTML = '<span class="loader"></span><div style="margin-top:8px;color:#b68b3c;font-weight:600;">Обработка оплаты...</div>';
  loaderDiv.style.display = 'block';

  setTimeout(function(){
    loaderDiv.style.display = 'none';
    loaderDiv.innerHTML = '';
    alert('Оплата прошла успешно!');
  }, 15000);
});

  // --- Закрытие окна по крестику ---
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('bookingModal').style.display = 'none';
  });

  // --- Закрытие по клику вне окна ---
  document.getElementById('bookingModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });

  // --- Обработка формы в модальном окне ---
  const modalForm = document.getElementById('modalBookingForm');
  modalForm.addEventListener('submit', function(ev) {
    ev.preventDefault();
    const paymentType = paymentSelect.value;
    if (paymentType === 'online') {
      window.location.href = 'qr-payment.html';
      return;
    }
    document.getElementById('modalResult').innerHTML = 
      '<b>Ваш номер забронирован.<br>Мы свяжемся с вами в течении 30 минут.</b>';
    setTimeout(function(){
      document.getElementById('bookingModal').style.display = 'none';
    }, 3000);
    
  });
});

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

  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', function() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burgerBtn').onclick = function() {
    document.getElementById('navMenu').classList.toggle('open');
  };
});