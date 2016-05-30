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

function register(username, password, colour){
    var tempJson = JSON.parse(readFile("example.json")); //look up for names that already taken
    var i = 0;
    for(i; i < tempJson.user.length; i++){
        if(tempJson.user[i][i] === username){
            window.alert("This name already exist");
            return;
        }
    }
    //no existence of this username...
    var usern = new Object();
    var pw = new Object();
    var col = new Object();
    usern[i] = username;
    pw[i] = password;
    col[i] = colour ;
    
    tempJson.user.push(usern);
    tempJson.dwp.push(pw);
    tempJson.colo.push(col);

    var writeDown = JSON.stringify(tempJson);
    writeJSON("example.json", writeDown);
}

function loginCheck(){
    var usern = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var tempJson = JSON.parse(readFile("example.json")); //look up for names that already taken
    var i = 0;
    for(i; i < tempJson.user.length; i++){
        if((tempJson.user[i][i] === usern) && (tempJson.dwp[i][i] === pwd)){
            //add code for successful login session
            window.alert("Success!!!!11111oneeleven");
            window.open("http://localhost/wep-prog-2/src/html/main.html?login=" + usern + "&colour=" + tempJson.colo[i][i],"_self");
        }
    }
}

//Displays Username in Colour
function getUsername() {
    var parameters = window.location.search.substring(1).split("&"); //read parameters from URL...
    var pair1 = parameters[0].split("=");
    var pair2 = parameters[1].split("=");
    var par = document.createElement("SPAN");
    var t = document.createTextNode(pair1[1]);
    par.appendChild(t);
    par.style.color = decodeURI(pair2[1]); //Decode because its encoded in URI
    document.getElementById("user").appendChild(par);
}
