// Topbar: mobile menu toggle + active state + scroll shadow
const topbar = document.getElementById('topbar');
const mainNav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburger');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');
    if (mainNav.classList.contains('open')) mainNav.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 6);
});

// Countdown (8 hours from now)
(function startCountdown() {
  const h = document.getElementById('cd-h');
  const m = document.getElementById('cd-m');
  const s = document.getElementById('cd-s');
  if (!h || !m || !s) return;
  const end = Date.now() + 8 * 60 * 60 * 1000;
  setInterval(() => {
    const left = Math.max(0, end - Date.now());
    const hh = String(Math.floor(left / 3600000)).padStart(2, '0');
    const mm = String(Math.floor((left % 3600000) / 60000)).padStart(2, '0');
    const ss = String(Math.floor((left % 60000) / 1000)).padStart(2, '0');
    h.textContent = hh; m.textContent = mm; s.textContent = ss;
  }, 1000);
})();

// Layout helpers
const root = document.documentElement;
function applyLayout() {
  const w = window.innerWidth;
  const heroH = w <= 600 ? Math.round(w * 0.56) : w <= 980 ? 360 : 420;
  root.style.setProperty('--hero-h', heroH + 'px');
  const catCols = w <= 480 ? 2 : w <= 900 ? 3 : 4;
  root.style.setProperty('--cats-cols', catCols);
}
window.addEventListener('resize', applyLayout);
window.addEventListener('DOMContentLoaded', applyLayout);
applyLayout();

// Filter UI (visual)
document.querySelectorAll('.brand-list a').forEach(a=>{
  a.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelectorAll('.brand-list a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});
