// document.addEventListener("DOMContentLoaded", ready);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


const tallennus = () => {
    let data = new FormData(form);
    console.log('let', data)
}