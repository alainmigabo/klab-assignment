let screen = document.forms[0]["input"];
function entervalue(clicked){
    if (screen.value == 0 && clicked.id != "minus" && clicked.id != "dot" && clicked.id != "plus" && clicked.id != "times" && clicked.id != "division") {
        screen.value = document.getElementById(clicked.id).innerHTML;
    }
    else{
        screen.value+=document.getElementById(clicked.id).innerHTML;
    }
}
function Delete(){
    if (screen.value.length == 1) {
        screen.value = 0;
    } else {
        screen.value = screen.value.slice(0,-1);
    }
}
function erase(){
    screen.value = 0;
}
document.getElementById("input").onclick = function fun() {
    if (screen.value == 0) {
        screen.value = ""
    }
}