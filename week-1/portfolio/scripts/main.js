// 1. Load saved theme OR detect system preference (runs immediately)
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // User made a choice before — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}

// 2. Wait for DOM to load before setting up the buttons
document.addEventListener('DOMContentLoaded', function() {
  const themeButtons = document.querySelectorAll('.theme-btn');
  
  // Safety check
  if (themeButtons.length === 0) {
    console.error('Theme buttons not found!');
    return;
  }

  // Add click listeners to all three buttons
  themeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedTheme = this.dataset.themeToggle; // "light", "dark", or "system"
      
      if (selectedTheme === 'system') {
        // User chose "Auto" — remove saved preference, use system
        localStorage.removeItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
      } else {
        // User chose "Light" or "Dark" — save it
        document.documentElement.dataset.theme = selectedTheme;
        localStorage.setItem('theme', selectedTheme);
      }

      // Update button states (highlight active button)
      updateActiveButton();
    });
  });

  // Function to highlight the active button
  function updateActiveButton() {
    const currentTheme = localStorage.getItem('theme');
    const systemTheme = currentTheme === null;
    
    themeButtons.forEach(button => {
      const buttonTheme = button.dataset.themeToggle;
      
      if (systemTheme && buttonTheme === 'system') {
        button.classList.add('active');
      } else if (buttonTheme === currentTheme) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Set initial active state
  updateActiveButton();
});

// 3. Listen for system preference changes (only if user chose "Auto")
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeQuery.addEventListener('change', function(event) {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    // User is on "Auto" mode — follow system changes
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
  }
});