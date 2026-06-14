
const detailButtons = document.querySelectorAll('.details-btn');
detailButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.service;
    const panel = document.getElementById(`details-${id}`);
    panel.classList.toggle('open');
    btn.textContent = panel.classList.contains('open') ? 'Ocultar detalles' : 'Ver detalles';
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.service-card');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
    const value = filter.dataset.filter;
    cards.forEach(card => {
      const show = value === 'all' || card.dataset.category.includes(value);
      card.style.display = show ? 'flex' : 'none';
    });
  });
});
