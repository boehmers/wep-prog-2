/**
 * Created by Markus on 20.05.2016.
 */
var modal;
var taskTitle;
var currentTaskId;

//noinspection JSAnnotator
function add(title, description) {
    //adds a taskBox to the tasklist
    var newID = readFile("taskCounter");
    writeFile("taskCounter", parseInt(newID) + 1);

    var taskData = {id: newID, name: title, user: localStorage.user, description: description, status: "taskList1"};

    var taskFile = JSON.parse(readFile("tasks.json"));
    taskFile.push(taskData);
    writeFile("tasks.json", JSON.stringify(taskFile));

    writeFile("comments/" + newID + ".json", "[]");

    addTaskData(taskData);
};

function addTaskData(taskData) {
    var div = document.createElement("DIV");
    div.className = "task";
    div.id = "taskData" + taskData.id;

    var nameLabel = document.createElement("LABEL");
    nameLabel.innerHTML = taskData.name;
    div.appendChild(nameLabel);

    div.appendChild(document.createElement("BR"));

    var userLabel = document.createElement("LABEL");
    userLabel.innerHTML = taskData.user;
    div.appendChild(userLabel);

    div.appendChild(document.createElement("BR"));

    var detailButton = document.createElement("BUTTON");
    detailButton.innerHTML = "Details...";
    detailButton.onclick = function () {
        showDetails(taskData.id);
    };
    div.appendChild(detailButton);

    //make taskbox draggable and append children    
    div.draggable = "true";
    div.addEventListener("dragstart", drag);
    document.getElementById(taskData.status).appendChild(div);
};

function modalDialog() {
    //show modal dialog
    modal = document.getElementById('modalDialog');
    modal.style.display = "block";
    taskTitle = document.getElementById('taskTitle');
    taskTitle.value = "";
};

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

function loadTasks() {
    var tasksJSON = readFile("tasks.json");
    var tasks = JSON.parse(tasksJSON);
    for (var i = 0; i < tasks.length; i++) {
        addTaskData(tasks[i]);
    }
}

function showDetails(taskID) {
    //show modal dialog
    currentTaskId = taskID;
    modal = document.getElementById('details');
    modal.style.display = "block";
    fillDetails();
    loadComments();
};

function fillDetails() {
    var task = getTaskById(currentTaskId);
    document.getElementById("title").innerHTML = task.name;
    document.getElementById("description").innerHTML = task.description;
    document.getElementById("assignedUser").innerHTML = task.user;
}

function loadComments() {
    var commentsJSON = readFile("comments/" + currentTaskId + ".json");
    var comments = JSON.parse(commentsJSON);

    var commentsNode = document.getElementById("comments");
    while (commentsNode.firstChild) {
        commentsNode.removeChild(commentsNode.firstChild);
    }

    for (var i = 0; i < comments.length; i++) {
        addCommentData(comments[i]);
    }
}

function addCommentData(commentData) {
    var div = document.createElement("DIV");
    //div.className = "task";

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

function saveComment(comment) {
    var commentData = {user: localStorage.user, userColor: localStorage.userColor, text: comment};
    var comments = JSON.parse(readFile("comments/" + currentTaskId + ".json"));
    comments.push(commentData);
    writeFile("comments/" + currentTaskId + ".json", JSON.stringify(comments));
    loadComments();
}

function updateTaskStatus(target, status) {
    var newStatus = status.replace("column", "taskList");
    var taskID = target.replace("taskData", "");

    var tasks = JSON.parse(readFile("tasks.json"));
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskID) {
            tasks[i].status = newStatus;
            writeFile("tasks.json", JSON.stringify(tasks));
        }
    }
}

function getTaskById(taskId) {
    var tasks = JSON.parse(readFile("tasks.json"));
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === currentTaskId) {
            return tasks[i];
        }
    }
}