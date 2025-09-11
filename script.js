  const hamburger = document.querySelector('.hamburger');
  const closeBtn = document.querySelector('.close');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuLinks = document.querySelectorAll('.menu-links a');

  // open
  hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('active');
  });

  // sluit met kruisje
  closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });

  // sluit automatisch bij klikken op een link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOverlay.classList.remove('active');
    });
  });

  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.slide-btn.prev');
  const nextBtn = document.querySelector('.slide-btn.next');

  const scrollAmount = 270; // breedte card + gap

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });