const filmList = document.querySelector(".films")

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function(response){

        const resData = response.data
    
        
        resData.forEach(function (film) {
                const url = film.image
                const relDate = film.release_date
                const title = film.title

                const image = `<div class="flm"><h2> title:${title} 
                ||release date:${relDate}</h2>
            <img src="${url}">
            </div>`
                filmList.innerHTML += image
            })
    })