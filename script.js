const falimsLlst=document.querySelector(".films-list")
axios.get("https://ghibliapi.herokuapp.com/films")
.then(function(response){
 const responseData= response.data

    console.log("responseData")
    // , responseData )
    responseData.forEach(function (film){
         const name = film.title 
         const image= film.image
         const release= film.release_data
        
    
     const allfilms = 
     `<div class="allfilms"> 
     <h3 title is: ${name} , release data is ${release} </3h>
     <img src="${image}"height="350px" width="350px" >
</div>`
     
falimsLlst.innerHTML+=allfilms
     
})
})

     
    
