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
  console.log("Button add log: \r\n" + myTable.innerHTML.replace(/\r?\n|\r|\t/g,''));
}

function loadCookies(){
  console.log("Cookies loaded");
  var myTable = document.getElementById("mizaInformacij");
  var x = getCookie("myTableData");
  if(x == ""){
    setCookie("myTableData", myTable.innerHTML+"", 2);
  }else{
    myTable.innerHTML = x + "";
  }
}

window.addEventListener("beforeunload", function(e){
  var jsTable = document.getElementById("mizaInformacij").innerHTML;
  setCookie("myTableData", jsTable, 2);
}, false);

function setCookie(cname, cvalue, exdays) {
    var cvalue2 = cvalue.replace(/\r?\n|\r|\t/g,'');
    cvalue2 = cvalue2.replace(";", "_$emi€olon");
    if(document.cookie.indexOf(getCookie(cname)) >= 0){
      document.cookie = document.cookie.replace(getCookie(cname), cvalue2);
      return;
    }
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue2 + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          var cookie_ = c.substring(name.length, c.length);
          cookie_ = cookie_.replace("_$emi€olon", ";");
          return cookie_;
        }
    }
    return "";
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

loadCookies();
