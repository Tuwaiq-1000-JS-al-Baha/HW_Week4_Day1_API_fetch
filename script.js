const film = document.querySelector(".film-list")
axios.get("https://ghibliapi.herokuapp.com/films")

.then(function (response) {
    const responseData  = response.data

    responseData.forEach(function (filmData) {

            const image = filmData.image
            const title = filmData.title
            const releaseData = filmData.release_data

            const filmlist = `<div class="film-list">
             <img src="${url}" height="200px"> 
             <h2>${title}</h2>  <h5>releaseData"${releaseData}"</h5></div>`
            //
             film.innerHTML += filmlist
        })
    })