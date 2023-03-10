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
            return true;
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
            return true;
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
            return true;
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
            return true;
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
            return true;
        }
    }
    validatename();
    validateemail();
    validatephone();
    validatesubject();
    validatemessage();
    if (validatename() && validateemail() && validatephone() && validatesubject() && validatemessage()) {
        emailjs.send("service_hgvnudx","template_dz2lc7m",{
            form_name: fname,
            email_id: email,
            Message: message
        })
        alert("Thanks for your message! It has been delivered to us successfully.")
    }
    
}
function activate(hovered){
    if (hovered.id == "portifoliobox1") {
        document.getElementById("hiddenpart1").style.visibility = "visible";   
    }
    else if (hovered.id == "portifoliobox2") {
        document.getElementById("hiddenpart2").style.visibility = "visible";
    }
    else if (hovered.id == "portifoliobox3") {
        document.getElementById("hiddenpart3").style.visibility = "visible";
    }
    else if (hovered.id == "portifoliobox4") {
        document.getElementById("hiddenpart4").style.visibility = "visible";
    }
    else if (hovered.id == "portifoliobox6") {
        document.getElementById("hiddenpart6").style.visibility = "visible";
    }
    else {
        document.getElementById("hiddenpart7").style.visibility = "visible";
    }
}
function disactivate(hovered) {
    if (hovered.id == "portifoliobox1") {
        document.getElementById("hiddenpart1").style.visibility = "hidden";
    }
    else if (hovered.id == "portifoliobox2") {
        document.getElementById("hiddenpart2").style.visibility = "hidden";
    }
    else if (hovered.id == "portifoliobox3") {
        document.getElementById("hiddenpart3").style.visibility = "hidden";
    }
    else if (hovered.id == "portifoliobox4") {
        document.getElementById("hiddenpart4").style.visibility = "hidden";
    }
    else if (hovered.id == "portifoliobox6") {
        document.getElementById("hiddenpart6").style.visibility = "hidden";
    }
    else {
        document.getElementById("hiddenpart7").style.visibility = "hidden";
    }
}
function handleportifolioboxes(clicked) {
    if (clicked.id == "all") {
        document.getElementById("portifoliobox1").style.display = "flex";
        document.getElementById("portifoliobox2").style.display = "flex";
        document.getElementById("portifoliobox3").style.display = "flex";
        document.getElementById("portifoliobox4").style.display = "none";
        document.getElementById("portifoliobox6").style.display = "none";
        document.getElementById("portifoliobox7").style.display = "none";
    } 
    else if (clicked.id == "youtube") {
        document.getElementById("portifoliobox1").style.display = "flex";
        document.getElementById("portifoliobox2").style.display = "flex";
        document.getElementById("portifoliobox3").style.display = "none";
        document.getElementById("portifoliobox4").style.display = "none";
        document.getElementById("portifoliobox6").style.display = "none";
        document.getElementById("portifoliobox7").style.display = "none";
    }
    else if (clicked.id == "vimeo") {
        document.getElementById("portifoliobox1").style.display = "none";
        document.getElementById("portifoliobox2").style.display = "none";
        document.getElementById("portifoliobox3").style.display = "flex";
        document.getElementById("portifoliobox4").style.display = "none";
        document.getElementById("portifoliobox6").style.display = "none";
        document.getElementById("portifoliobox7").style.display = "none";
    }
    else if (clicked.id == "soundcloud") {
        document.getElementById("portifoliobox1").style.display = "none";
        document.getElementById("portifoliobox2").style.display = "none";
        document.getElementById("portifoliobox3").style.display = "none";
        document.getElementById("portifoliobox4").style.display = "none";
        document.getElementById("portifoliobox6").style.display = "none";
        document.getElementById("portifoliobox7").style.display = "none";
    }
    else if (clicked.id == "popup") {
        document.getElementById("portifoliobox1").style.display = "none";
        document.getElementById("portifoliobox2").style.display = "none";
        document.getElementById("portifoliobox3").style.display = "none";
        document.getElementById("portifoliobox4").style.display = "none";
        document.getElementById("portifoliobox6").style.display = "none";
        document.getElementById("portifoliobox7").style.display = "none";
    }
    else {
        document.getElementById("portifoliobox1").style.display = "none";
        document.getElementById("portifoliobox2").style.display = "none";
        document.getElementById("portifoliobox3").style.display = "none";
        document.getElementById("portifoliobox4").style.display = "none";
        document.getElementById("portifoliobox6").style.display = "none";
        document.getElementById("portifoliobox7").style.display = "none";     
    }
}
function callcomment(clicked) {
    document.getElementById("leftcover").style = "border-color: transparent;";
    document.getElementById("middlecover").style = "border-color: transparent;";
    document.getElementById("rightcover").style = "border-color: transparent;";
    document.getElementById(clicked.id).style = "border-color: white;";
    if (clicked.id == "leftcover") {
        document.getElementById("commenteraddress2").style.display = "none"
        document.getElementById("commenteraddress3").style.display = "none"
        document.getElementById("commenteraddress1").style.display = "flex"
        document.getElementById("comment1").style.display = "flex"
        document.getElementById("comment2").style.display = "none"
        document.getElementById("comment3").style.display = "none"
    } 
    else if (clicked.id == "middlecover") {
        document.getElementById("commenteraddress2").style.display = "flex"
        document.getElementById("commenteraddress3").style.display = "none"
        document.getElementById("commenteraddress1").style.display = "none"
        document.getElementById("comment1").style.display = "none"
        document.getElementById("comment2").style.display = "flex"
        document.getElementById("comment3").style.display = "none"
    } 
    else {
        document.getElementById("commenteraddress2").style.display = "none"
        document.getElementById("commenteraddress3").style.display = "flex"
        document.getElementById("commenteraddress1").style.display = "none"
        document.getElementById("comment1").style.display = "none"
        document.getElementById("comment2").style.display = "none"
        document.getElementById("comment3").style.display = "flex"   
    }
}