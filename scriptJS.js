var c = ["JavaScript", "W3 Schools", "CodeAcademy", "Računalništvo"];
var colour = "rgb(255, 255, 255)";
var i = 0;

function nameChanger() {
  colour = "rgb(" + Math.floor(Math.random()*255) + ", " +
  Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")";
  document.getElementById("naslov").style.color=colour;
  document.getElementById("naslov").innerHTML=c[i++];
  if(i==c.length) i = 0;
}

var myNameChanger = setInterval(nameChanger, 1000);


//Slides//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].style.height ="";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.height = "30em";
  dots[slideIndex-1].className += " active";
}



function myTimer(){
	var d = new Date("2011-04-20T15:30:51.01");
	var cd = new Date();
	var timeDiff = cd.getTime() - d.getTime();
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	var diffHrs = Math.ceil(timeDiff / (1000 * 3600))%24;
	var diffMin = Math.ceil(timeDiff / (1000 * 60))%60;
	var diffSec = Math.ceil(timeDiff / (1000))%60;
  document.getElementById("timer").innerHTML= "Štoparica moje starosti: "+diffDays + "d " + diffHrs + "h "+diffMin+"m " +diffSec + "s";
  document.getElementById("timer2").innerHTML= "Štoparica moje starosti: "+diffDays + "d " + diffHrs + "h "+diffMin+"m " +diffSec + "s";
}

var myTimeR = setInterval(myTimer, 1000);

var allTheTables = [];
function addDataToTable(event){
  console.log(document.cookie);
  var myTable = document.getElementById("mizaInformacij");
  var inputss = [];
  inputss.push(window.prompt("Vnesite ime",""));
  inputss.push(window.prompt("Vensite predmet",""));
  inputss.push(window.prompt("Vnesite oceno",""));
  if(!inputss || inputss[0] === "" || inputss[1] === "" || inputss[2] === ""){
    alert("Neveljaven vnos!");
    return;
  } else {
      var myRow = myTable.insertRow(-1);
      var cell1 = myRow.insertCell(0).innerHTML = inputss[0];
      var cell2 = myRow.insertCell(1).innerHTML = inputss[1];
      var cell3 = myRow.insertCell(2).innerHTML = inputss[2];
  }
}

function loadCookies(){
  var myTable = document.getElementById("mizaInformacij");
  var x = document.cookie;
  if(x == "jsTable=/jsTable" || x == "jsTable=") {
    x = "jsTable=" + myTable.innerHTML + "/jsTable;";
  }
  var pt1 = x.split("jsTable=")[1].toString();
  var pt2 = pt1.split("/jsTable")[0];
  var myTable = document.getElementById("mizaInformacij");
  myTable.innerHTML = pt2+"";
}

window.addEventListener("beforeunload", function(e){
  console.log(document.cookie);
  var myTable = document.getElementById("mizaInformacij");
  var jsTable = myTable.innerHTML;
  console.log(jsTable);
  document.cookie = "jsTable=" + jsTable + "/jsTable;";
  console.log("TABLE" + document.cookie);
}, false);

loadCookies();
