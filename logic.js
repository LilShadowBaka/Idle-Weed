//Import


//General Vars
let weedInv = [];
let weedNum = weedInv.length;

//Growth Rates
let plotRate = 1;


//Grow window
// Get the modal
var fmodal = document.getElementById("fModal");

// Get the button that opens the modal
var fbtn = document.getElementById("fBtn");

// Get the <span> element that closes the modal
var fspan = document.getElementsByClassName("fclose")[0];

// When the user clicks on the button, open the modal
fbtn.onclick = function() {
  fmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fspan.onclick = function() {
  fmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == fmodal) {
    fmodal.style.display = "none";
  }
}

document.getElementById("farm");
document.getElementById("security")
