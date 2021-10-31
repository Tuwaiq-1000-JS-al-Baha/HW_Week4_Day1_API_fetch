const filmsItme = document.querySelector(".list-films")
axios.get("https://ghibliapi.herokuapp.com/films").then(function (respons) {
    const data = respons.data
    data.forEach(function (films) {
        const url = films.image
        const titel = films.title
        const releaseDate = films.release_date
        const filmsList = `<div>
        <h4>${titel}</h4>
        <p>${releaseDate}</p>

        <img src="${url}">
        </div>
        `
        filmsItme.innerHTML += filmsList
    })
})