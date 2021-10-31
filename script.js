const filmsList = document.querySelector(".film-list")
axios.get('https://ghibliapi.herokuapp.com/films')
.then(function(response){
    const responseData = response.data
    console.log(responseData)
    responseData.forEach(function(film){

        const name = film.title
        const image = film.image
        const release = film.release_date


        const allFilm = `<div class="allfilm">
<h3> title is: ${name} , release date is ${release} </h3>  <img src ="${image}"  height"=300px" width = "300px"> 
        
        </div>`

        filmsList.innerHTML+=allFilm
       
   
   
    })


})
