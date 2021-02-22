const imageContainer = document.getElementById('image-wrapper');
const image = document.getElementById('image');

function increaseImageScale() {
  image.classList.add('scaled');
}
function removeImageScale() {
  image.classList.remove('scaled');
}

imageContainer.addEventListener('mouseenter', increaseImageScale);
imageContainer.addEventListener('mouseleave', removeImageScale);
