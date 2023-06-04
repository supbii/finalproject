var prevScrollPos = window.pageYOffset;
var hiddenText = document.querySelector('.hidden-text');

window.addEventListener('scroll', revealText);

function revealText() {
  var currentScrollPos = window.pageYOffset;
  var scrollDirection = currentScrollPos > prevScrollPos ? 'up' : 'down';
  prevScrollPos = currentScrollPos;

  if (scrollDirection === 'down') {
    hiddenText.classList.remove('show');
  } else {
    hiddenText.classList.add('show');
  }
}