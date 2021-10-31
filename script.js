 const filmsItme =document.querySelector(".list-films")
 axios.get("https://ghibliapi.herokuapp.com/films")
 .then(function(response){
const responseData = response.data
responseData.forEach(function(films) {
    const url = films.image
    const title = films.title
    const releaseDate = films.release_date
    
    const filmsList = `<div>
    <h3>${title}</h3>
   <img src="${url}">
   <p>releasedate"${releaseDate}</p>
    </div>`
  filmsItme.innerHTML += filmsList

})

})
