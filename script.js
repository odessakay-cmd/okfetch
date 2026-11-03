const showOnly = fruitItem => {
  document.querySelectorAll( ".description" ).forEach( descriptionDiv => {
              descriptionDiv.style.filter = "blur(5em)"
              descriptionDiv.style.opacity = 0 ;
  }
  )
  document.querySelector( "#description-of-" + fruitItem.innerHTML ).style.filter = "blur(0)"; 
  document.querySelector( "#description-of-" + fruitItem.innerHTML ).style.opacity = 1;  
}
const addListeners = () => {
    document.querySelectorAll( "li" ).forEach(
      menuItem => menuItem.onclick = () => showOnly( menuItem )
    )
}
const showSpecial = () => {
  fetch("image.html")
  .then(
    response => response.text()
    )
    .then(
      text => document.querySelector("#special").innerHTML = text
    )
    .catch(
      error => document.querySelector("#special").innerHTML = "Could not be fetch'd"
    )
    .catch(
      error => console.warn(error)
    )
;}