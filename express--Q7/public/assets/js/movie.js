const poster = document.getElementById('poster');

const pageUrl = window.location.href.split('/');
const id = +pageUrl[pageUrl.length - 1];

function ajax(method, url, callback) {
  const http = new XMLHttpRequest();
  function getResponse() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        callback(this.response);
      }
    }
  }
  http.open(method, url);
  http.send();
  http.addEventListener('readystatechange', getResponse);
}

function fillPoster(movie) {
  poster.innerHTML += `<div class="poster__content"><h3 class="poster__name">${movie.name}</h3>
  <p class="poster__text">
    ${movie.description}
  </p></div>`;
}

function setPosterBackground(image) {
  poster.style.background = `url(${image}) no-repeat top/cover`;
}

ajax('get', `api/v1/movies/${id}`, (response) => {
  const responseBody = JSON.parse(response);
  const movie = responseBody.data.movie;
  console.log(movie);
  setPosterBackground(movie.image);
  fillPoster(movie);
});
