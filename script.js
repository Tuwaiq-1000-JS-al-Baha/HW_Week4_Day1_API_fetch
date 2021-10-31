const filmslist =document.querySelector(".films-sheets")

axios.get("https://ghibliapi.herokuapp.com/films")

.then(function(response){
    const responseData =response.data

    responseData.forEach(function(film) {
        const url=film.image
        const dateFilm=film.release_date
        const title=film.title
        
        const filmssheets=`<div>
        <h3>${title}</h3>
        <p>${dateFilm}</p>
        <img src="${url}">
        </div>`
        
        filmslist.innerHTML += filmssheets
    })

})
