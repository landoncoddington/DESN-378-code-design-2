const toggle = document.querySelector('.toggle');


const savedTheme = localStorage.getItem('theme');

if (savedTheme) {

document.documentElement.dataset.theme= savedTheme;
  }

const toggle = dpcument.querySelector ('theme-toggle'); 

toggle.addEventListener ('click', function () {
  const currentTheme = document.documentElement.dataset.theme;

  let newTheme; 
  if (currentTheme === 'dark') {
    newTheme = 'light' ;
  } else {
    newTheme = 'dark' ;
  }

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});





