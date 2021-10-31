const filmsList = document.querySelector(".films-list")


axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
        const responseData = response.data

        console.log("responseData:", responseData)
        responseData.forEach(function (data) {
            const image = data.image
            // console.log(image)
            const title = data.title
            // console.log(title)
            const releaseDate = data.release_date
            // console.log(releaseDate)

            const dataItem = `
            <div class="data-Item">
            <img src=${image} width="300px" height="200px">
            <h2>${title}</h2>
            <p>${releaseDate}</p>
            </div>`
            filmsList.innerHTML += dataItem
        })
    })
