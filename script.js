const filmsList = document.querySelector(".films-list")

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {

        const Data = response.data
        const films = Data
        console.log(films)

        films.forEach(function (film) {
            const img = film.image
            const title = film.title
            const release = film.release_date

            const Filmlast = `<div>
               <img src ="${img}">
               <h3>The title : ${title}</h3>
               <h3>The release date : ${release}</h3></div>`

            filmsList.innerHTML += Filmlast

        })
    })