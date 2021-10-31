const filmsList = document.querySelector(".films-list")

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
        const rsponseData = response.data
        rsponseData.forEach(element => {
            const title = element.title
            const url = element.image
            const releaseData = element.release_date
            filmsList.innerHTML += `
            <h3> ${title} </h3>
            <img src="${url}" height="200px">
            <p> Release Data: ${releaseData} </p>
            `
        });
    })