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
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});





