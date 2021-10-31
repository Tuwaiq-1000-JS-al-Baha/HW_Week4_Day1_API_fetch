const films = document.querySelector(".all-films")

axios.get("https://ghibliapi.herokuapp.com/films")

.then(function(response){
    const responseData =response.data

    responseData.forEach(function (element) {
        const image = element.image
        const title = element.title
        const releaseDate =element.release_date

        
        const filmList =`<div class="film">
        <h3>${title} ${releaseDate}</h3>
        <img src="${image} ">
        </div>`
        films.innerHTML += filmList
    })
})

