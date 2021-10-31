const list = document.querySelector(".list")

axios.get("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
        const responseData = response.data

        //console.log(responseData);

        responseData.forEach(function (item) {

            const image = item.image
            const title = item.title
            const releaseDate = item.release_date

            filmsList = ` 
<div class="films-list">
  <img src = "${image}" height= 200px >
   <h2> ${title} </h2> 
   <p> ${releaseDate} </p>
   
   </div> `
            list.innerHTML += filmsList

        });
    })