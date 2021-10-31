const list = document.querySelector('.list')

axios.get('https://ghibliapi.herokuapp.com/films')
    .then(function (response) {
        const responseData = response.data
        // console.log(responseData)

        responseData.forEach(function (contentFilm) {
            console.log(contentFilm)
            const title = contentFilm.title
            const image = contentFilm.image
            const releaseDate = contentFilm.release_date

            const content = `<h2  onclick='toggleMovie(this)'>${title}</h2>
             <img class='imgMovie' src='${image}'>
           <p class='dateMovie'>${releaseDate}</p> `
            list.innerHTML += content
        })
    })

function toggleMovie(h2) {
    const image = h2.nextElementSibling
    console.log(image)
    const releaseDate = h2.nextElementSibling.nextElementSibling
    console.log(releaseDate)
    if (getComputedStyle(image).display == 'inline' && getComputedStyle(releaseDate).display == 'block') {
        image.style.display = 'none'
        releaseDate.style.display = 'none'
    } else if (getComputedStyle(image).display == 'none' && getComputedStyle(releaseDate).display == 'none') {
        image.style.display = 'inline'
        releaseDate.style.display = 'block'
    }
}