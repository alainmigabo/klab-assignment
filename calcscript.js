let calculated = 0;
let screen = document.forms[0]["input"];
function entervalue(clicked){
    let countdots = 0;
    for(i=0;i<screen.value.length;i++){
        if (screen.value[i] == ".") {
            countdots+=1;
        }
    }
    if (calculated > 0) {
        screen.value = document.getElementById(clicked.id).innerHTML;
        calculated = 0;
    }
    else if (screen.value == "0" && clicked.id != "minus" && clicked.id != "dot" && clicked.id != "plus" && clicked.id != "times" && clicked.id != "division") {
        screen.value = document.getElementById(clicked.id).innerHTML;
    }
    else if (countdots > 0 && clicked.id == "dot") {
        screen.value+="";
    }
    else if (clicked.id == "minus") {
        screen.value+="-";
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
function calculate() {
    input = screen.value;
    for(i=0;i<input.length;i++){
        if (input[i] == "X") {
            input = input.replace("X","*")
        }
    }
    screen.value = eval(input);
    calculated+=1;
}