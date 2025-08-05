// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const mode = body.classList.contains('dark-mode') ? '🌙' : '☀️';
  themeToggle.textContent = mode;
});

// Show/hide side nav on hover
const header = document.querySelector('header');
const sideNav = document.querySelector('.side-nav');

header.addEventListener('mouseenter', () => {
  sideNav.classList.add('show');
});

sideNav.addEventListener('mouseleave', () => {
  sideNav.classList.remove('show');
});
