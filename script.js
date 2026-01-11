const reveals = document.querySelectorAll('.reveal');
const evaporateEls = document.querySelectorAll('.evaporate');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add('active');
    }
  });

  evaporateEls.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < -100 || r.bottom > window.innerHeight + 100) {
      el.classList.add('out');
    } else {
      el.classList.remove('out');
    }
  });
});

function toggleTheme() {
  document.body.classList.toggle('dark');
}

document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.success').style.display = 'block';
  e.target.reset();
});
