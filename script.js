const filmList = document.querySelector(".film-list")

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
        // console.log(response)
        const responseData = response.data
        //console.log(responseData)
        responseData.forEach(function (data) {

            const title = data.title
            const image = data.image
            const releaseDate = data.release_date
            //console.log(responseData)
            const films = `<div class="films"> <h4>Films names is : ${title}
            <br>The release date is : ${releaseDate}</h4>
            <img src="${image}" height="200px"> 
            </div>`

            filmList.innerHTML += films
        })

    })