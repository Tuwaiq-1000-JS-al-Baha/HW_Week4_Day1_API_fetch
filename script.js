const movesList = document.querySelector(".moves-List")
axios
  .get("https://ghibliapi.herokuapp.com/films")

  .then(function (response) {
    const responseData = response.data
    console.log("responseData:", responseData)
    const moves = responseData
    console.log("moves:", moves)
    moves.forEach(function (move) {
        const url = move.image
      const release_date=move.release_date
      const moveRelease=`
      <div class="move-releas">
      <h5>${release_date}</h5>
      </div>`
      movesList.innerHTML+=moveRelease
      const image = move.image
      const moveImge=`
      <img.src="${image}">`

      movesList.innerHTML+=image
      const title = move.title
      const moveItem = `
      <div class="move-item">
      <h3>${title}</h3>

      
      </div>`
      movesList.innerHTML += moveItem
    })
  })
