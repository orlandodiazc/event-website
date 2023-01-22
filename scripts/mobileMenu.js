const mainHeader = document.querySelector('.main-header-cont');
const navToggle = document.querySelector('.mobile-toggle-nav');

navToggle.addEventListener('click', () => {
  const visibility = mainHeader.getAttribute('data-visible');

  if (visibility === 'false') {
    mainHeader.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    document.body.style.overflow = 'hidden';
  } else {
    mainHeader.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = 'visible';
  }
});
