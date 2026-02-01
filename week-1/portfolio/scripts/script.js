const toggle = document.querySelector('.toggle');


const savedTheme = localStorage.getItem('theme');

if (savedTheme) {

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
} else {

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDark.matches) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}


toggle.addEventListener('click', function() {
  const isDark = document.body.classList.contains('dark');

  if (isDark) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});