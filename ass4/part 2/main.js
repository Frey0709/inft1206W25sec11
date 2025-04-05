// Name: Claude De Guzman
// Student Number: 100971490
// Date: April 4, 2025
// Description: Part 1
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltTexts = [
  'Closeup of a human eye',
  'Beautiful landscape view',
  'Close-up of a flower',
  'Night sky with stars',
  'Ocean waves crashing onto rocks'
];

/* Looping through images */
for (let i = 0; i < imageFiles.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFiles[i]);
  newImage.setAttribute('alt', imageAltTexts[i]);
  thumbBar.appendChild(newImage);

  /* Adding a click event listener to each thumbnail image */
  newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', 'images/' + imageFiles[i]);
    displayedImage.setAttribute('alt', imageAltTexts[i]);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
  if (overlay.style.backgroundColor === 'rgba(0,0,0,0)') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
