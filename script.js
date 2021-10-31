const filmList = document.querySelector(".film-list")
axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (respounse) {
        const responseData = respounse.data
        responseData.forEach(function (film) {
            const title = film.title
            const image = film.image
            const releaseDate = film.release_date

            const filmItem =
                `  <div class="filmItem">
            <h3>titel is: ${title} , release date : ${releaseDate}</h3>
             <image src="${image}" height="250px" width="250px">
           </div>   `

            filmList.innerHTML += filmItem
        })
    })