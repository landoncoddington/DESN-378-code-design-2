// 1. Load saved theme OR detect system preference (runs immediately)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User made a choice before — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}

// 2. Toggle on click
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);  // Saves the user's explicit choice
});

// 3. Listen for system preference changes
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeQuery.addEventListener('change', function(event) {
  // Only update if user hasn't made an explicit choice
  const savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
  }
});