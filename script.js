function pagereloadprevention(){
    event.preventDefault();
}
function changecolorup(clicked){
    document.getElementById("homebutton").style.color = "white"
    document.getElementById("aboutbutton").style.color = "white"
    document.getElementById("servicebutton").style.color = "white"
    document.getElementById("portifoliobutton").style.color = "white"
    document.getElementById("blogbutton").style.color = "white"
    document.getElementById("contactbutton").style.color = "white"
    document.getElementById(clicked.id).style.color = "#00C0FF"
}
function changecolordown(clicked){
    document.getElementById("all").style.color = "white"
    document.getElementById("youtube").style.color = "white"
    document.getElementById("vimeo").style.color = "white"
    document.getElementById("soundcloud").style.color = "white"
    document.getElementById("popup").style.color = "white"
    document.getElementById("content").style.color = "white"
    document.getElementById(clicked.id).style.color = "#00C0FF"
}
function activate1(){
    document.getElementById("hiddenpart1").style.visibility = "viisible";
}
function disactivate(activated){
    document.getElementById("hiddenpart").style.visibility = "hidden";
}
let a = document.getElemntById("formemail").placeholder.style.value;
console.log(a);
function revealhiddenmenu() {
    document.getElementById("hiddenmenu").style.display = "flex";
    document.getElementById("bars").style.display = "none";
    document.getElementById("cancel").style.display = "flex";
}
function hidemenu() {
    document.getElementById("hiddenmenu").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    document.getElementById("bars").style.display = "flex";
}