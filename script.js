const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.menu-overlay');

hamburger.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});
