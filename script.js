
const filmList = document.querySelector(".list")
axios.get("https://ghibliapi.herokuapp.com/films")
.then(function(response){
    const responseData = response.data
    console.log ("responseData:",responseData)
    responseData.forEach(function(data)  {
        const title=data.title
        const image = data.image
        const release_date=data.release_data
const MOVES =`
<div class="films">
<h2> films names is : ${title} <br> the release_date is : ${release_date}</h2>
<img src ="${image}" height ="200px">
</div>
`
filmList.innerHTML+=MOVES
    });
})