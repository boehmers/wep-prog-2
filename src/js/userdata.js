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
            localStorage.user = usern;
            localStorage.userColor = tempJson[i].color;
            //window.alert("Success!!!!11111oneeleven");
            window.open("../html/main.html","_self");
            return;
        }
    }

    window.alert("User/Passwort nicht vorhanden.");
}

/**
 * Setzt den Benutzer im Dokument.
 */
function getUsername() {
     var par = document.createElement("SPAN");
     var t = document.createTextNode(localStorage.user);
     par.appendChild(t);
     par.style.color = decodeURI(localStorage.userColor); //Decode because its encoded in URI;
     document.getElementById("user").appendChild(par);
}

/**
 * Prueft, ob ein Benutzer angemeldet ist.
 * Ist kein Benutzer angemeldet, so wird auf die login-Seite weitergeleitet.
 */
function checkForUser() {
    //localStorage.user = "Testuser"; //TODO Für Testzwecke einkommentieren
    if(localStorage.user === undefined){
        window.open('http://localhost/wep-prog-2/src/html/login.html', '_self');
    }
}
