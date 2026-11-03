const control = document.querySelector('.signal-control');
const clock = document.querySelector('#clock');

control?.addEventListener('click', () => {
  const active = document.body.classList.toggle('is-disturbed');
  control.setAttribute('aria-pressed', String(active));
  control.querySelector('span').textContent = active ? 'stabilize signal' : 'disturb signal';
});

function tick() {
  if (clock) clock.textContent = new Date().toISOString().slice(11, 19);
}

tick();
setInterval(tick, 1000);
