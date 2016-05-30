var regModal;
var chosenColor;

//Opens the register-screen
function pressRegisterButton() {
    //show modal dialog
    regModal = document.getElementById('registerDialog');
    regModal.style.display="block";
}

//closes the register-screen
function closeRegDialog(){
    regModal = document.getElementById("registerDialog");
    regModal.style.display="none";
};

//to choose the new users color
function chooseColor(color){
    chosenColor = color;
    feedbackColor();
}

//to give feedback about the chosen color (Changes the Color of the Color-Button)
function feedbackColor(){
    var changingProperty = document.getElementById("dropbtn");
    
    if(chosenColor === "chooseRed"){
        changingProperty.style.color="#A80000";
    }

    else if(chosenColor === "chooseBlue"){
        changingProperty.style.color="#3366FF";
    }

    else if(chosenColor === "chooseGreen"){
        changingProperty.style.color="#00CC33";
    }

    else if(chosenColor === "chooseYellow"){
        changingProperty.style.color="#ccff00";
    }
}

function registerUser(){
    var pw1 = document.getElementById("regPw");
    var pw2 = document.getElementById("confirmRegPw");
    var usern = document.getElementById("regUsername");
    var col = document.getElementById("dropbtn");

    if(pw1.value === pw2.value){
        register(usern.value, pw1.value, col.style.color.toString());
    }
    else{
        alert("Passwörter stimmen nicht überein!");
    }
}