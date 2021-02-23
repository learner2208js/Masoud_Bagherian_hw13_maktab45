const nav = document.getElementById('nav');
const navIndicator = document.getElementById('nav-indicator');
let navItems = document.getElementsByClassName('nav__item');
navItems = Array.prototype.slice.call(navItems);
function init() {
  resetIndicator();
}
function resetIndicator() {
  const firstItem = nav.children[1];
  const width = firstItem.offsetWidth;
  const height = firstItem.offsetHeight;
  navIndicator.style.left = '0';
  navIndicator.style.top = '0';
  navIndicator.style.width = `${width}px`;
  navIndicator.style.height = `${height}px`;
}
function moveIndicator() {
  const left = this.offsetLeft;
  const top = this.offsetTop;
  const width = this.offsetWidth;
  const height = this.offsetHeight;
  navIndicator.style.left = `${left}px`;
  navIndicator.style.top = `${top}px`;
  navIndicator.style.width = `${width}px`;
  navIndicator.style.height = `${height}px`;
}
init();

navItems.forEach((item) => item.addEventListener('mouseenter', moveIndicator));
window.addEventListener('resize', function () {
  resetIndicator();
});
nav.addEventListener('mouseleave', function () {
  resetIndicator();
});
