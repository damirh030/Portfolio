let scrollY = 0;

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    // ОБНОВЛЯЕМ scrollY ПРИ КАЖДОМ ОТКРЫТИИ!
    scrollY = window.scrollY || window.pageYOffset;

    const card = btn.closest('.portfolio-card');
    const img = card.querySelector('img');
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = img.src;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  document.getElementById('photoModal').style.display = "none";
  document.body.style.overflow = '';
  // ВОЗВРАЩАЕМ scrollY, который был до открытия
  window.scrollTo(0, scrollY);
}

document.getElementById('closeModal').onclick = closeModal;
document.getElementById('photoModal').onclick = function(e) {
  if (e.target === this) closeModal();
};