const filmsList = document.querySelector('.films-list')


axios.get('https://ghibliapi.herokuapp.com/films')
    .then(function (response) {
        const data = response.data
        data.forEach(function (films) {
            const image = films.image
            const title = films.title
            const releaseDate = films.release_date

            const newList = `
            <div>
            <h3>${title}</h3>
            <img src='${image}' height='200px' width='200px'>
            <p>${releaseDate}</p>
            </div>`

            filmsList.innerHTML += newList

        })

    })

