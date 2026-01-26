const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');

const captions = [
  "Click to explore the life of Dr. Martin Luther King Jr...",
  "1929-1948: Born in Atlanta, Georgia, young Martin excelled in school and entered Morehouse College at just 15 years old.",
  "1955-1956: After Rosa Parks' arrest, Dr. King led the Montgomery Bus Boycott for 381 days, ending segregation on public buses.",
  "1963: Over 250,000 people gathered for the March on Washington, where King delivered his powerful 'I Have a Dream' speech.",
  "April 4,1968: Dr. King was assassinated in Memphis, Tennessee, but his legacy continues to inspire civil rights movements.",
];

let currentStep = 0;

image.addEventListener('click', function() {
  currentStep++;
  
  if (currentStep >= captions.length) {
    currentStep = 0;
  }
  
  caption.textContent = captions[currentStep];
  image.src = `assets/images/image-${currentStep + 1}.jpg`;
  updateProgress(currentStep);
});

function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

}