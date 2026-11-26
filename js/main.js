const logoLink = document.querySelector('.logo-link');
const cartBtn = document.querySelector('.cart-btn');

// clicking the logo scrolls back to the top instead of jumping + adding # to the url
logoLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

cartBtn.addEventListener('click', () => {
  // TODO: open cart once checkout is set up
});
