const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');

const captions = [
  "Click the image to begin...",
  "Chapter 1: The beginning...",
  "Chapter 2: The journey...",
  "Chapter 3: The challenge...",
  "Chapter 4: The turning point...",
];

let currentStep = 0;

image.addEventListener('click', function() {
  currentStep++;
  
  if (currentStep < captions.length) {
    caption.textContent = captions[currentStep];
    image.src = `assets/images/image-${currentStep + 1}.jpg`;
    updateProgress(currentStep);
  }
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