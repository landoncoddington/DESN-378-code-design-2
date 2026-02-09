// =============================
// THEME SYSTEM 
// =============================

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

// =============================
// DROPDOWN FUNCTIONALITY 
// =============================

// 2. Wait for DOM to load before setting up the dropdown
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.querySelector('.dropbtn');
  const themeOptions = document.querySelectorAll('.dropdown-content a');
  

  // Toggle dropdown on button click
  dropbtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click from bubbling
    dropdown.classList.toggle('open');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  // Handle theme selection from dropdown
  themeOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent # navigation
      
      const selectedTheme = this.dataset.theme; // "light", "dark", or "system"
      
      // Update active state in dropdown
      themeOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      // Apply theme logic
      if (selectedTheme === 'system') {
        // User chose "System" — remove saved preference, use OS
        localStorage.removeItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
      } else {
        // User chose "Light" or "Dark" — save it
        document.documentElement.dataset.theme = selectedTheme;
        localStorage.setItem('theme', selectedTheme);
      }
      
      // Update the dropdown button icon to match selection
      updateDropdownIcon(selectedTheme);
      
      // Close dropdown
      dropdown.classList.remove('open');
    });
  });

  // Function to update the dropdown button icon
  function updateDropdownIcon(theme) {
    const btnSvg = dropbtn.querySelector('svg');
    
    if (theme === 'light') {
      // Hollow circle for light mode
      btnSvg.innerHTML = '<circle cx="12" cy="12" r="8"/>';
      btnSvg.setAttribute('fill', 'none');
      btnSvg.setAttribute('stroke', 'currentColor');
      btnSvg.setAttribute('stroke-width', '2');
    } else if (theme === 'dark') {
      // Filled circle for dark mode
      btnSvg.innerHTML = '<circle cx="12" cy="12" r="8"/>';
      btnSvg.setAttribute('fill', 'currentColor');
      btnSvg.removeAttribute('stroke');
      btnSvg.removeAttribute('stroke-width');
    } else {
      // Half-filled circle for system mode
      btnSvg.innerHTML = `
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"/>
        <path d="M 12 4 A 8 8 0 0 1 12 20 Z" fill="currentColor"/>
      `;
      btnSvg.setAttribute('fill', 'none');
    }
  }

  // Set initial active state and icon on page load
  function setInitialState() {
    const activeTheme = localStorage.getItem('theme') || 'system';
    
    // Set active class on the correct option
    themeOptions.forEach(option => {
      if (option.dataset.theme === activeTheme) {
        option.classList.add('active');
      }
    });
    
    // Update button icon
    updateDropdownIcon(activeTheme);
  }
  
  setInitialState();
});