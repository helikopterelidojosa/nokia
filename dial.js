let pickNumber = " ";
let callingGoes = false;


function dial1() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "1";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial2() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "2";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial3() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "3";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial4() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "4";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial5() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "5";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial6() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "6";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial7() {
  showDialScreen();
  if (callingGoes == false) {
    pickNumber += "7";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial8() {
  showDialScreen();
  changeButtons();
  if (callingGoes == false) {
    pickNumber += "8";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial9() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "9";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dialpound() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "*";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dial0() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += "0";

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function dialhash() {
  showDialScreen();
  changeButtons();
  if (callingGoes === false) {
    pickNumber += `#`;

    document.getElementById("number").innerHTML = pickNumber;
  }
}

function showDialScreen() {
  document.getElementById("main-display").style.display = "none";
  document.getElementById("dial-display").style.display = "flex";
}



function changeButtons() {
  document.getElementById("btn-uncall").style.display = "none";
  document.getElementById("btn-uncall-end-call").style.display = "flex";

  document.getElementById("btn-call").style.display = "none";
  document.getElementById("btn-call-calling").style.display = "flex";
}

function calling() {
  document.getElementById("text-calling").style.display = "block";
  callingGoes = true;
}



function uncall() {
  document.getElementById("main-display").style.display = "flex";
  document.getElementById("dial-display").style.display = "none";
  document.getElementById("text-calling").style.display = "none";
  callingGoes = false;
  pickNumber = " ";
  document.getElementById("number").innerHTML = pickNumber;
}
