/**
 * Created by PaoloPinkel on 26.05.2016.
 */

function register(username, password, colour){
    var tempJson = JSON.parse(readFile("example.json")); //look up for names that already taken
    var i = 0;
    for(i; i < tempJson.length; i++){
        if(tempJson[i].user === username){
            window.alert("This name already exist");
            return;
        }
    }
    //no existence of this username...
    var usern = new Object();
    usern["user"] = username;
    usern["pw"] = password;
    usern["color"] = colour;
    
    tempJson.push(usern);

    var writeDown = JSON.stringify(tempJson);
    writeFile("example.json", writeDown);
}

function loginCheck(){
    var usern = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;

    var tempJson = JSON.parse(readFile("example.json")); //look up for names that already taken
    var i = 0;
    for(i; i < tempJson.length; i++){
        if((tempJson[i].user === usern) && (tempJson[i].pw === pwd)){
            //add code for successful login session
            window.open("../html/main.html?login=" + usern + "&colour=" + tempJson[i].color,"_self");
            return;
        }
    }

    window.alert("User/Passwort nicht vorhanden.");
}

//Displays Username in Colour
function getUsername() {
    var parameters = window.location.search.substring(1).split("&"); //read parameters from URL...
    var pair1 = parameters[0].split("=");
    var pair2 = parameters[1].split("=");
    var par = document.createElement("SPAN");
    var t = document.createTextNode(decodeURI(pair1[1]));
    par.appendChild(t);
    par.style.color = decodeURI(pair2[1]); //Decode because its encoded in URI
    document.getElementById("user").appendChild(par);
}
