const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    nav.classList.add('sticky', 'shadow');
  } else {
    nav.classList.remove('sticky', 'shadow');
  }
});
