const films = document.querySelector(".films-list");

axios.get("https://ghibliapi.herokuapp.com/films")

  .then(function (response) {
    const responseData = response.data;

    responseData.forEach(function (film) {
      const image = film.image;
      const title = film.title;
      const re = film.re_data;

      const AllFilm = `<div class="films">
    <h3> Film Name is :${title} and the re Data is ${re}</h3>
    <img src="${image}">
    </dive>`;
      films.innerHTML += allFilm;
    });
  });
