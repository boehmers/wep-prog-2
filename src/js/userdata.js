/**
 * Created by PaoloPinkel on 26.05.2016.
 */
function writeJSON(filename, content) {
    var request = new XMLHttpRequest();
    request.open("GET", "../php/savefile.php?filename=../../data/" + filename + "&content=" + content, false);
    request.send();
    console.log("Write done!");
};

function readFile(filename) {
    var request = new XMLHttpRequest();
    request.open("GET", "../php/readfile.php?filename=../../data/" + filename, false);
    request.send();
    console.log("Read done!");
    console.log(request.responseText);
    return request.responseText;
};

function register(){
    var user = document.getElementById("username").value;   //TODO: type right elements
    var pwd = document.getElementById("password").value;   //take value from input
    var tempJson = JSON.parse(readFile("example.json")); //look up for names that already taken
    var i = 0;
    for(i; i < tempJson.user.length; i++){
        if(tempJson.user[i][i] === user){
            window.alert("This name already exist");
            return;
        }
    }
    //no existence of this username...
    var greenhorn = new Object();
    var unsave = new Object();
    greenhorn[i] = user;
    unsave[i] = pwd;
    tempJson.user.push(greenhorn);
    tempJson.dwp.push(unsave);

    var writeDown = JSON.stringify(tempJson);
    writeJSON("example.json", writeDown);
}

function loginCheck(){
    var user = document.getElementById("username").value;   //TODO: type right elements
    var pwd = document.getElementById("password").value;    //take value from input
    var tempJson = JSON.parse(readFile("example.json")); //look up for names that already taken
    var i = 0;
    for(i; i < tempJson.user.length; i++){
        if((tempJson.user[i][i] === user) && (tempJson.dwp[i][i] === pwd)){
            //add code for successful login session
            window.alert("Success!!!!11111oneeleven");
        }
    }
}

window.onload = function () {
    document.getElementById("Register").onclick = register;
    document.getElementById("Login").onclick = loginCheck;
};