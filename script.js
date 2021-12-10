const shareButton = document.getElementById('share-button');
const sharePopup = document.getElementById('share-popup');

shareButton.addEventListener('click', function() {
  if(sharePopup.classList.value === 'share-popup') {
    sharePopup.classList.add('active');
  } else {
    sharePopup.classList.remove('active');
  }
});



