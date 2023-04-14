/*hamburger script*/
const hamburger = document.querySelector('.hamburger');

const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  // Toggle class to show/hide the navigation menu
  menu.classList.toggle('show');
});
