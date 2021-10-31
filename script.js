const falimsLlst=document.querySelector(".films-list")
axios.get("https://ghibliapi.herokuapp.com/films")
.then(function(response){

 const films= response.data
    console.log(films)
    
    films.forEach(function (film){
         const name = film.title 
         const image= film.image
         const release= film.release_date
        
    
     const allfilms = 
     `<div class="allfilms"> 
     <h3>title is: ${name} , release date is ${release} <br> </3h>
     <img src="${image}"height="350px" width="350px" >
</div>`
     
falimsLlst.innerHTML+=allfilms
     
})
})

     
    

