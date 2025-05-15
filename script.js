function toggleDetails(item) {
  document.querySelectorAll('.menu-item').forEach(i => {
    if (i !== item) i.classList.remove('active');
  });
  item.classList.toggle('active');
}
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}