const target = new Date('2026-06-28T10:00:00+08:00');
function updateCountdown() {
  const diff = target - Date.now();
  if (diff <= 0) return;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  const pad = n => String(n).padStart(2, '0');
  const d = document.getElementById('cd-days');
  const h = document.getElementById('cd-hours');
  const m = document.getElementById('cd-minutes');
  const s = document.getElementById('cd-seconds');
  if (d) d.textContent = days;
  if (h) h.textContent = pad(hours);
  if (m) m.textContent = pad(minutes);
  if (s) s.textContent = pad(seconds);
}
updateCountdown();
setInterval(updateCountdown, 1000);

const hamburger = document.querySelector('.hamburger');
const topbarLinks = document.querySelector('.topbar__links');
if (hamburger && topbarLinks) {
  hamburger.addEventListener('click', () => {
    const open = topbarLinks.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  topbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      topbarLinks.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

const galleryTrack = document.querySelector('.gallery-track');
if (galleryTrack) {
  Array.from(galleryTrack.children).forEach(img => {
    galleryTrack.appendChild(img.cloneNode(true));
  });
}

