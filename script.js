const movesList = document.querySelector(".moves-List")
axios
  .get("https://ghibliapi.herokuapp.com/films")

  .then(function (response) {
    const responseData = response.data
    console.log("responseData:", responseData)
    const moves = responseData
    console.log("moves:", moves)
    moves.forEach(function (move) {
        //release-data
      const release_date=move.release_date
      const moveRelease=`
      <div class="move-releas">
      <h5>${release_date}</h5>
      </div>`
      movesList.innerHTML+=moveRelease
//image

      const image = move.image 
      const moveImge=`
      <image src="${image}">`

      movesList.innerHTML+=image

//title
      const title = move.title

      const moveItem = `
      <div class="move-item">
      <h3>${title}</h3>

      
      </div>`
      movesList.innerHTML += moveItem
    })
  })
