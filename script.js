const films = document.querySelector(".div-film")

axios.get("https://ghibliapi.herokuapp.com/films")
.then(function (response) {
    const item = response.data
    item.forEach(function (film) {
        const image = film.image
        const title = film.title
        const release = film.release_date

        const allFilm = `<div class="films">
        <h3> Film Name is : ${title} and the Release Date is ${release}</h3>
        <img src="${image}">
        </div>`
        films.innerHTML += allFilm
    })
})