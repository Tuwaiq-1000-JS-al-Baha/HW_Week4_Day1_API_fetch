const listFilms = document.querySelector(".list-films")


axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
        const data = response.data
        console.log(response)
        console.log(data)

        data.forEach(function (data) {
            const image = data.image
            console.log(image)
            const title = data.title
            console.log(title)
            const release = data.release_date
            console.log(release)

            listFilms.innerHTML += `
            <div>
            <img src="${image}" height="200" width="200px">
            <h3>${title}</h3>
            <h3>${release}</h3>
            </div>
            `
        })
    })
