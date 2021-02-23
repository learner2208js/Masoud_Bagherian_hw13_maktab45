const movieGallery = document.getElementById('movies-gallery');

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

function createMovieCards(movies) {
  movieGallery.innerHTML = '';
  movies.forEach((movie) => {
    movieGallery.innerHTML += `<div class="movie-wrapper">
    <div class="movie">
      <div class="movie__description">
        <h3 class="movie__heading">overview</h3>
        <p class="movie__overview">
          ${movie.description}
        </p>
      </div>
      <div class="movie__cover">
        <img src="${movie.image}" alt="" class="image" />
      </div>
      <div class="movie__caption">
        <h2 class="movie__name">${movie.name}</h2>
        <span class="movie__rating">${movie.rate}</span>
      </div>
      <a href="/movies/${movie.id}" class="movie__btn">more info</a>
    </div>
  </div>`;
  });
}

ajax('get', '/api/v1/movies', (response) => {
  const responseBody = JSON.parse(response);
  const movies = responseBody.data.movies;
  createMovieCards(movies);
});
