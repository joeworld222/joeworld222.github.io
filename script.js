document.addEventListener('DOMContentLoaded', () => {
  const thoughtBtn = document.getElementById('toggle-thoughts');
  const projectsBtn = document.getElementById('toggle-projects');
  const thoughtsSection = document.getElementById('thoughts');
  const projectsSection = document.getElementById('projects');

  thoughtBtn.addEventListener('click', () => {
    thoughtsSection.scrollIntoView({ behavior: 'smooth' });
  });

  projectsBtn.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Random intro line for fun
  const intro = document.querySelector('.intro');
  const intros = [
    'Living in the future 🌌',
    'Dream big. Code harder 👨‍💻',
    'Joe World is online 🚀',
    'Animations and magic in progress 🎨✨',
  ];
  intro.textContent = intros[Math.floor(Math.random() * intros.length)];
});
