/**
 * (Ueber-)Schreibt eine Datei.
 * @param filename Der Dateiname
 * @param content Der zu schreibende Inhalt
 */
function writeFile(filename, content) {
    var request = new XMLHttpRequest();
    request.open("GET", "../php/savefile.php?filename=../../data/" + filename + "&content=" + content, false);
    request.send();
    console.log("Write done! " + filename);
    console.log("  Content: " + content);
}

/**
 * (Ueber-)Schreibt eine Datei (Asynchron).
 * @param filename Der Dateiname
 * @param content Der zu schreibende Inhalt
 * @param onDone Die Funktion, die ausgefuehrt werden soll, sobald die Datei geschrieben wurde
 */
function writeFileAsync(filename, content, onDone) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            onDone();
            console.log("Write done! " + filename);
            console.log("  Content: " + content);
        }
    };
    request.open("GET", "../php/savefile.php?filename=../../data/" + filename + "&content=" + content, true);
    request.send();
}

/**
 * Liest den Inhalt einer Datei.
 * @param filename Der Dateiname
 */
function readFile(filename) {
    var request = new XMLHttpRequest();
    request.open("GET", "../php/readfile.php?filename=../../data/" + filename, false);
    request.send();
    console.log("Read done! " + filename);
    console.log("  Content: " + request.responseText);
    return request.responseText;
}

/**
 * Liest den Inhalt einer Datei (Asynchron).
 * @param filename Der Dateiname
 * @param onDone Die Funktion, die ausgefuehrt werden soll, sobald die Datei gelesen wurde.
 * Der Funktion wird der gelesene Text als Parameter mitgegeben
 */
function readFileAsync(filename, onDone) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            onDone(request.responseText);
            console.log("Read done! " + filename);
            console.log("  Content: " + request.responseText);
        }
    };
    request.open("GET", "../php/readfile.php?filename=../../data/" + filename, true);
    request.send();
}

function TESTOnDoneRead(text) {
    console.log("Aysnc Read done!");
    console.log(text);
}

function TESTOnDoneWrite() {
    console.log("Async Write done!");
}