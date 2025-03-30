var currentModal = "Maddox";
var modal = document.getElementById(currentModal);

function loginscript() {
    let uname = prompt("username?")
    let pword = prompt("password?")
    if (uname == "Carson" && pword == "Ilikehandstanding") {
        currentModal = "Carson";
        modal = document.getElementById(currentModal);
        displaymodal()
    } else if (uname == "thespisExtraordinaire" && pword == "Feld_08d14h!") {
      currentModal = "Amphibole";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "handdrawnDestruction" && pword == "1amNOT0samco") {
      currentModal = "Ante";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "ifTrueEqualsFalse" && pword == "1nv3rt") {
      currentModal = "Cecil";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "DubloonsSansPantaloons" && pword == "Y4rh4rf!ddled33d33") {
      currentModal = "Danassi";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "Openhimer" && pword == "CARS-ONSK-YPEC-ALL1") {
      currentModal = "Boomer";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "melancholicEsoterica" && pword == "myf4!rAila") {
      currentModal = "Iovites";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "RIGHTFULKING" && pword == "BRINGMEGRAPES") {
      currentModal = "Lard";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "SoftMobster" && pword == "1nth3w33ds") {
      currentModal = "Leo";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "Maddox" && pword == "WhereHeShouldntBe") {
      currentModal = "Maddox";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "DesignerGoat" && pword == "p0rt4l4cc3ss") {
      currentModal = "Pygmal";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "AllTheLimerick" && pword == "Licini0!") {
      currentModal = "Sarah";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "ScienceWinsAgain" && pword == "L4bR4ts") {
      currentModal = "Simon";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "Big_Boss" && pword == "DieSiedler-Kosmos-1995") {
      currentModal = "Boss";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "UwUSempai" && pword == "OwOKohai") {
      currentModal = "UwUSempai";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "DancingQueen" && pword == "Wh0;sTh4TM4N") {
      currentModal = "Jones";
      modal = document.getElementById(currentModal);
      displaymodal()
    } else if (uname == "Remote-Is-Me" && pword == "£2P2bgw9/X2!cP|-JNwh0FXP(Z4^d2mh\a9") {
      currentModal = "Remmy";
      modal = document.getElementById(currentModal);
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
