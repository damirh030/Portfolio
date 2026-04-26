document.querySelectorAll('.more-btn').forEach((btn, idx) => {
    btn.addEventListener('click', function() {
      this.closest('.project-card').querySelector('.modal').style.display = 'block';
    });
  });

  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      this.closest('.modal').style.display = 'none';
    });
  });

  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }