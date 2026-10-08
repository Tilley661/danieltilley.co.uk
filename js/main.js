// ---------- Theme toggle ----------
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';

root.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☾' : '☀';

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☾' : '☀';
});

// ---------- Cursor glow ----------
const glow = document.querySelector('.cursor-glow');
let glowX = window.innerWidth / 2;
let glowY = window.innerHeight / 2;
let targetX = glowX;
let targetY = glowY;

window.addEventListener('pointermove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
  glow.style.opacity = '1';
});

function animateGlow() {
  glowX += (targetX - glowX) * 0.08;
  glowY += (targetY - glowY) * 0.08;
  glow.style.left = glowX + 'px';
  glow.style.top = glowY + 'px';
  requestAnimationFrame(animateGlow);
}
if (window.matchMedia('(pointer: fine)').matches) {
  animateGlow();
}

// ---------- Nav scroll state ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ---------- Typed text ----------
const phrases = ['beautiful interfaces.', 'delightful animations.', 'fast web apps.', 'design systems.'];
const typedEl = document.getElementById('typed');
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];
  typedEl.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeLoop, 70);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1600);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 40);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, 350);
  }
}
typeLoop();

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ---------- Animated counters ----------
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat__num').forEach((el) => counterObserver.observe(el));

// ---------- Year ----------
document.getElementById('year').textContent = new Date().getFullYear();
