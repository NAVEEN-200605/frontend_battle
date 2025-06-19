// Loader Hide
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.onclick = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
};

// Restore theme
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
});
