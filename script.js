/* Reveal */
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add('active');
    }
  });
});

/* 🌙 Dark Mode */
function toggleTheme() {
  document.body.classList.toggle('dark');
}

/* 📩 Contact Animation */
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.success').style.display = 'block';
  e.target.reset();
});
