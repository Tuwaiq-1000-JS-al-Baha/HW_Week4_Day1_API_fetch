const filmsList = document.querySelector(".filmsIteam")
axios.get("https://ghibliapi.herokuapp.com/films")

.then(function (response) {
    const data = response.data

    console.log(data)

    data.forEach(function (data) {
            const image =data.image
            const title = data.title
            const releaseDate =data.release_date

            console.log(image)
            console.log(title)
            console.log(releaseDate)
  
            const filmsIteam = ` 
            <div>
            <img src="${image}" height="100" width="100px">
            <h3> title="${title}"</h3>
            <h4> releas="${releaseDate}"</h4>
            </div>  `

            filmsList.innerHTML+= filmsIteam
           

        })
    })
