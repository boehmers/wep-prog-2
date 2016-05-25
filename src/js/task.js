/**
 * Created by Markus on 20.05.2016.
 */
var modal;
var counter=0;
var taskBoxLabel;

function add(listID){
    //adds a taskBox to the tasklist
    counter++;
    var node = document.createElement("DIV");
    taskBoxLabel = document.createElement("LABEL");
    node.className="task";  //for CSS
    node.id="task"+counter;
    console.log(node.id);
    //make taskbox draggable
    node.draggable="true";
    node.ondragstart="drag(event)";
    document.getElementById(listID).appendChild(node);
};

function modalDialog(){
    //show modal dialog
    modal = document.getElementById('modalDialog');
    modal.style.display="block";
};

function close(){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
    console.log("hallo");
};

function save(textarea){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
    taskBoxLabel.text=textarea.value;
    //TODO: Insert textdescription
};