function switchToHover(){
  var element1=document.getElementById("meni1");
  var element2=document.getElementById("meni2");
  if(window.pageYOffset>=300){
    element2.style.position="fixed";
    element2.style.display="grid";
    element2.style.top="0";
    element2.style.width="100%";
    element2.style.height="3em";
    element1.style.position="static";
    element1.style.visibility="hidden";
  }
  else{
    element1.style.visibility="visible";
    element2.style.position="static";
    element2.style.display="none";
  }
}
