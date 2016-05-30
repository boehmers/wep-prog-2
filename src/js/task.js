/**
 * Created by Markus on 20.05.2016.
 */
var modal;
var counter=0;
var taskTitle;
var taskDescription;
var detailsButton;
var node;

//noinspection JSAnnotator
function add(listID) {
    //adds a taskBox to the tasklist
    counter++;
    node = document.createElement("DIV");
    detailsButton = document.createElement("DIV");
    var taskBoxLabel = document.createElement("LABEL");

    detailsButton.innerHTML = "Details...";
    detailsButton.className = "button";
    detailsButton.id = "detailsButton"+counter;
    detailsButton.addEventListener('click', modalDialog('details'));

    taskBoxLabel.className="taskBoxLabel";
    taskBoxLabel.id="taskLabel"+counter;
    node.className="task";  //for CSS
    node.id="task"+counter;

    //make taskbox draggable and append children 
    node.draggable="true";
    node.addEventListener("dragstart", drag);
    document.getElementById(listID).appendChild(node);
    node.appendChild(taskBoxLabel);
    node.appendChild(detailsButton);

};

function modalDialog(element){
    //show modal dialog
    modal = document.getElementById(element);
    modal.style.display = "block";
    taskTitle = document.getElementById('taskTitle');
    taskTitle.value = "";
    taskDescription = document.getElementById('taskDescription');
    taskDescription.value = "";

};

function cancel(){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
}

function save(){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
    var label = document.getElementById("taskLabel"+counter);
    label.innerHTML=taskTitle.value;

    // optional: change height of taskbox for long textareas
    //var textLength = document.getElementById("taskDescription").value.length;
    //console.log(textLength);
    //if (textLength > 25){
    //    node.style.height="10%";
    //}
};


