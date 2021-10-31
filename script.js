const filme1=document.querySelector(".films-list")



axios.get("https://ghibliapi.herokuapp.com/films")
.then(function(film){
console.log(film)
const filmeData=film.data
console.log(filmeData)

filmeData.forEach(function(filme) {
    const image =filme.image
    //console.log(image)
    const title=filme.title
    //console.log(title)
    const date=filme.release_date
    //console.log(date)
    
    const filmItem =`
    <div class="film-item">
    <h3>"${title}"</h3>
    <img  src="${image}" height="200px" width="200px">
    <h2>"${date}"</h2>
    
    </div>`
   console.log(filmItem)
    
   filme1.innerHTML+= filmItem

})
})