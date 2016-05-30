/**
 * Created by Markus on 20.05.2016.
 */
var modal;
var taskTitle;

//noinspection JSAnnotator
/**
 * Erstellt einen neuen Task.
 * @param title Titel des Tasks
 * @param description Beschreibung des Tasks
 */
function add(title, description) {
    //adds a taskBox to the tasklist
    var newID = readFile("taskCounter");
    writeFile("taskCounter", parseInt(newID) + 1);

    var taskData = {id: newID, name: title, user: "[Niemand]", description: description, status: "taskList1"};

    var taskFile = JSON.parse(readFile("tasks.json"));
    taskFile.push(taskData);
    writeFile("tasks.json", JSON.stringify(taskFile));

    writeFile("comments/" + newID + ".json", "[]");

    addTaskData(taskData);
};

/**
 * Fügt dem Dokument den Task hinzu.
 * @param taskData Die Daten des Tasks
 */
function addTaskData(taskData) {
    var div = document.createElement("DIV");
    div.className = "task";
    div.id = "taskData" + taskData.id;

    var nameLabel = document.createElement("LABEL");
    nameLabel.innerHTML = taskData.name;
    div.appendChild(nameLabel);

    div.appendChild(document.createElement("BR"));

    var detailButton = document.createElement("BUTTON");
    detailButton.innerHTML = "Details...";
    detailButton.style.float = "right";
    detailButton.onclick = function () {
        showDetails(taskData.id);
    };
    div.appendChild(detailButton);

    var userLabel = document.createElement("LABEL");
    userLabel.id = "userLabel" + taskData.id;
    userLabel.innerHTML = taskData.user;
    div.appendChild(userLabel);

    //make taskbox draggable and append children    
    div.draggable = "true";
    div.addEventListener("dragstart", drag);
    document.getElementById(taskData.status).appendChild(div);
};

/**
 * Öffnet den modalen Dialog zum Anlegen eines neuen Tasks.
 */
function modalDialog() {
    //show modal dialog
    modal = document.getElementById('modalDialog');
    modal.style.display = "block";
    taskTitle = document.getElementById('taskTitle');
    taskTitle.value = "";
};

/**
 * Schließt alle modalen Dialoge.
 */
function closeModalDialogs() {
    modal = document.getElementById('modalDialog');
    modal.style.display = "none";
    modal = document.getElementById('details');
    modal.style.display = "none";
}

function save() { //TODO nötig?
    modal = document.getElementById('modalDialog');
    modal.style.display = "none";

    // optional: change height of taskbox for long textareas
    //var textLength = document.getElementById("taskDescription").value.length;
    //console.log(textLength);
    //if (textLength > 25){
    //    node.style.height="10%";
    //}
};

/**
 * Laedt alle Tasks fuer die Uebersicht.
 */
function loadTasks() {
    var tasksJSON = readFile("tasks.json");
    var tasks = JSON.parse(tasksJSON);
    for (var i = 0; i < tasks.length; i++) {
        addTaskData(tasks[i]);
    }
}

/**
 * Aktualisiert den Status des Tasks.
 * @param target Das target der Drag&Drop-Aktion (ein Task-Fenster)
 * @param newColumn Die id der neuen Spalte
 */
function updateTaskStatus(target, newColumn) {
    var newStatus = newColumn.replace("column", "taskList");
    var taskID = target.replace("taskData", "");

    var tasks = JSON.parse(readFile("tasks.json"));
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskID) {
            tasks[i].status = newStatus;
            tasks[i].user = localStorage.user;
            document.getElementById("userLabel" + taskID).innerHTML = localStorage.user;
            writeFile("tasks.json", JSON.stringify(tasks));
        }
    }
}

/**
 * Sucht den Task zu einer ID.
 * @param taskId Die gesuchte Task-ID
 */
function getTaskById(taskId) {
    var tasks = JSON.parse(readFile("tasks.json"));
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            return tasks[i];
        }
    }
}