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

function validatename(){
    if (fname == "") {
        document.getElementById("nameerrormessage").style.visibility = "visible";
        document.getElementById("formname").style.border = "none";
        document.getElementById("formname").style.border = "2px solid rgb(243, 132, 132)";
    } 
    else {
        document.getElementById("formname").style.border = "none";
        document.getElementById("formname").style.border = "2px solid rgb(115, 253, 216)";
        document.getElementById("nameerrormessage").style.visibility = "hidden";
    }
}
function validateemail(){
    if (email == "") {
        document.getElementById("emailerrormessage").style.visibility = "visible";
        document.getElementById("formemail").style.border = "none";
        document.getElementById("formemail").style.border = "2px solid rgb(243, 132, 132)";
    } 
    else {
        document.getElementById("formemail").style.border = "none";
        document.getElementById("formemail").style.border = "2px solid rgb(115, 253, 216)";
        document.getElementById("emailerrormessage").style.visibility = "hidden";
    }
}
function validatephone(){
    if (phonenumber == "") {
        document.getElementById("phoneerrormessage").style.visibility = "visible";
        document.getElementById("formphone").style.border = "none";
        document.getElementById("formphone").style.border = "2px solid rgb(243, 132, 132)";
    } 
    else {
        document.getElementById("formphone").style.border = "none";
        document.getElementById("formphone").style.border = "2px solid rgb(115, 253, 216)";
        document.getElementById("phoneerrormessage").style.visibility = "hidden";
    }
}
function validatesubject(){
    if (subject == "") {
        document.getElementById("subjecterrormessage").style.visibility = "visible";
        document.getElementById("formsubject").style.border = "none";
        document.getElementById("formsubject").style.border = "2px solid rgb(243, 132, 132)";
    } 
    else {
        document.getElementById("formsubject").style.border = "none";
        document.getElementById("formsubject").style.border = "2px solid rgb(115, 253, 216)";
        document.getElementById("subjecterrormessage").style.visibility = "hidden";
    }
}
function validatemessage(){
    if (message == "") {
        document.getElementById("messageerrormessage").style.visibility = "visible";
        document.getElementById("formmessage").style.border = "none";
        document.getElementById("formmessage").style.border = "2px solid rgb(243, 132, 132)";
    } 
    else {
        document.getElementById("formmessage").style.border = "none";
        document.getElementById("formmessage").style.border = "2px solid rgb(115, 253, 216)";
        document.getElementById("messageerrormessage").style.visibility = "hidden";
    }
}
function validateform(){
    let fname = document.forms[0]["formname"].value;
    let email = document.forms[0]["formemail"].value;
    let phonenumber = document.forms[0]["formphone"].value;
    let subject = document.forms[0]["formsubject"].value;
    let message = document.forms[0]["formmessage"].value;
    function validatename(){
        if (fname == "") {
            document.getElementById("nameerrormessage").style.visibility = "visible";
            document.getElementById("formname").style.border = "none";
            document.getElementById("formname").style.border = "2px solid rgb(243, 132, 132)";
        }
        else if (fname.length < 2) {
            document.getElementById("nameerrormessage").style.visibility = "visible";
            document.getElementById("formname").style.border = "none";
            document.getElementById("formname").style.border = "2px solid rgb(243, 132, 132)";
            document.getElementById("nameerrormessage").innerHTML = "Your name can't be a single character";
        }
        else {
            document.getElementById("formname").style.border = "none";
            document.getElementById("formname").style.border = "2px solid rgb(115, 253, 216)";
            document.getElementById("nameerrormessage").style.visibility = "hidden";
        }
    }
    function validateemail(){
        if (email == "") {
            document.getElementById("emailerrormessage").style.visibility = "visible";
            document.getElementById("formemail").style.border = "none";
            document.getElementById("formemail").style.border = "2px solid rgb(243, 132, 132)";
        } 
        else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            document.getElementById("emailerrormessage").style.visibility = "visible";
            document.getElementById("formemail").style.border = "none";
            document.getElementById("formemail").style.border = "2px solid rgb(243, 132, 132)";
            document.getElementById("emailerrormessage").innerHTML = "Please enter a valid email";
        }
        else {
            document.getElementById("formemail").style.border = "none";
            document.getElementById("formemail").style.border = "2px solid rgb(115, 253, 216)";
            document.getElementById("emailerrormessage").style.visibility = "hidden";
        }
    }
    function validatephone(){
        if (phonenumber == "") {
            document.getElementById("phoneerrormessage").style.visibility = "visible";
            document.getElementById("formphone").style.border = "none";
            document.getElementById("formphone").style.border = "2px solid rgb(243, 132, 132)";
        } 
        else if (phonenumber.length < 10) {
            document.getElementById("phoneerrormessage").style.visibility = "visible";
            document.getElementById("formphone").style.border = "none";
            document.getElementById("formphone").style.border = "2px solid rgb(243, 132, 132)";
            document.getElementById("phoneerrormessage").innerHTML = "Your number needs to be at least 10 digits";
        }
        else {
            document.getElementById("formphone").style.border = "none";
            document.getElementById("formphone").style.border = "2px solid rgb(115, 253, 216)";
            document.getElementById("phoneerrormessage").style.visibility = "hidden";
        }
    }
    function validatesubject(){
        if (subject == "") {
            document.getElementById("subjecterrormessage").style.visibility = "visible";
            document.getElementById("formsubject").style.border = "none";
            document.getElementById("formsubject").style.border = "2px solid rgb(243, 132, 132)";
        } 
        else {
            document.getElementById("formsubject").style.border = "none";
            document.getElementById("formsubject").style.border = "2px solid rgb(115, 253, 216)";
            document.getElementById("subjecterrormessage").style.visibility = "hidden";
        }
    }
    function validatemessage(){
        if (message == "") {
            document.getElementById("messageerrormessage").style.visibility = "visible";
            document.getElementById("formmessage").style.border = "none";
            document.getElementById("formmessage").style.border = "2px solid rgb(243, 132, 132)";
        } 
        else if (message.length < 40) {
            document.getElementById("messageerrormessage").style.visibility = "visible";
            document.getElementById("formmessage").style.border = "none";
            document.getElementById("formmessage").style.border = "2px solid rgb(243, 132, 132)";
            document.getElementById("messageerrormessage").innerHTML = "Your messages needs to have at least 40 characters";
        }
        else {
            document.getElementById("formmessage").style.border = "none";
            document.getElementById("formmessage").style.border = "2px solid rgb(115, 253, 216)";
            document.getElementById("messageerrormessage").style.visibility = "hidden";
        }
    }
    validatename();
    validateemail();
    validatephone();
    validatesubject();
    validatemessage();
}