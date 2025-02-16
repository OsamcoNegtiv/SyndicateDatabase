function loginscript() {
    let uname = prompt("username?")
    let pword = prompt("password?")
    if (uname == "Devon_F_Neo+Ultimate" && pword == "Wth3Power0fNEO!!!!!!!!") {
        currentModal = "DevonSheo";
        modal = document.getElementById(currentModal);
        alert(currentModal);
        displaymodal()
    } else {
        alert("Incorrect Username or Password.")
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
function close() {
  modal.style.display = "none";
}

// When the user clicks on the button, open the modal
function displaymodal() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
