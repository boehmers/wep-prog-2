/**
 * Created by Markus on 20.05.2016.
 */
var modal;
var counter=0;
var textArea;
var node;

//noinspection JSAnnotator
function add(listID){
    //adds a taskBox to the tasklist
    counter++;
    node = document.createElement("DIV");
    var taskBoxLabel = document.createElement("LABEL");
    taskBoxLabel.className="taskBoxLabel";
    taskBoxLabel.id="taskLabel"+counter;
    node.className="task";  //for CSS
    node.id="task"+counter;
    //console.log(node.id);

    //make taskbox draggable and append children    
    node.draggable="true";
    node.addEventListener("dragstart", drag);
    document.getElementById(listID).appendChild(node);
    node.appendChild(taskBoxLabel);
};

function modalDialog(){
    //show modal dialog
    modal = document.getElementById('modalDialog');
    modal.style.display="block";
    textArea = document.getElementById('taskDescription');
    textArea.value="";
};

function cancel(){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
}

function save(){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
    var label = document.getElementById("taskLabel"+counter);
    label.innerHTML=textArea.value;

    // optional: change height of taskbox for long textareas
    //var textLength = document.getElementById("taskDescription").value.length;
    //console.log(textLength);
    //if (textLength > 25){
    //    node.style.height="10%";
    //}
};
