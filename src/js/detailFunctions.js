/**
 * Der aktuell betrachtete Task.
 */
var currentTaskId;

/**
 * Oeffnet den Detail-Dialog.
 * @param taskID Die entsprechende Task-ID
 */
function showDetails(taskID) {
    currentTaskId = taskID;
    modal = document.getElementById('details');
    modal.style.display = "block";
    fillDetails();
    loadComments();
};

/**
 * Befuellt die Felder (Titel, Beschreibung, Benutzer).
 */
function fillDetails() {
    var task = getTaskById(currentTaskId);
    document.getElementById("title").innerHTML = task.name;
    document.getElementById("description").innerHTML = task.description;
    document.getElementById("assignedUser").innerHTML = task.user;
}

/**
 * Laedt alle Kommentare.
 */
function loadComments() {
    var commentsAsJSON = readFile("comments/" + currentTaskId + ".json");
    var comments = JSON.parse(commentsAsJSON);

    var commentsNode = document.getElementById("comments");
    //Ggfs. bereits vorhandene Kommentare entfernen
    while (commentsNode.firstChild) {
        commentsNode.removeChild(commentsNode.firstChild);
    }
    for (var i = 0; i < comments.length; i++) {
        addCommentData(comments[i]);
    }
}

/**
 * Erstellt einen Kommentar-Eintrag und fuegt ihn den Kommentaren hinzu.
 * @param commentData Die Kommentar-Informationen
 */
function addCommentData(commentData) {
    var div = document.createElement("DIV");

    var nameLabel = document.createElement("LABEL");
    nameLabel.innerHTML = commentData.user;
    nameLabel.style.color = commentData.userColor;
    div.appendChild(nameLabel);

    div.appendChild(document.createElement("BR"));

    var contentLabel = document.createElement("LABEL");
    contentLabel.innerHTML = "   " + commentData.text;
    contentLabel.className = "commentContent";
    div.appendChild(contentLabel);

    document.getElementById("comments").appendChild(div);
}

/**
 * Speichert einen Kommentar.
 * @param comment Der Kommentar-Text
 */
function saveComment(comment) {
    var commentData = {user: localStorage.user, userColor: localStorage.userColor, text: comment};
    var comments = JSON.parse(readFile("comments/" + currentTaskId + ".json"));
    comments.push(commentData);
    writeFile("comments/" + currentTaskId + ".json", JSON.stringify(comments));
    loadComments();
}