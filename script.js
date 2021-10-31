const filmsL=document.querySelector(".films-list");

axios.get("https://ghibliapi.herokuapp.com/films").then(function(response){
    
    const responsedata=response.data
    console.log( " responsedata",responsedata)
   
    
    responsedata.forEach(films => {
        const image =films.image
        const title =films.title
        const release_date=films.release_date
      
        const ITR=`<h1> Title Film is ${title} and the release Data is ${release_date}</h1>
        <img src="${image}"> `
        filmsL.innerHTML+=ITR;
    });
   
})