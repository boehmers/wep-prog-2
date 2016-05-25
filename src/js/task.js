/**
 * Created by Markus on 20.05.2016.
 */
var taskBox;
var modal;
var counter=0;

function add(listID){
    //adds a taskBox to the tasklist
    counter++;
    var node = document.createElement("DIV");            
    var button = document.createElement("BUTTON");
    var buttonText = document.createTextNode("Beschreibung hinzufügen");
    button.appendChild(buttonText);
    button.addEventListener("click", modalDialog);
    node.className="task";  //for css
    node.id="task"+counter;
    console.log(node.id);
    //make taskbox draggable
    node.draggable="true";
    node.ondragstart="drag(event)";
    node.appendChild(button);
    document.getElementById(listID).appendChild(node);
};

function modalDialog(){
    //show modal dialog
    modal = document.getElementById('modalDialog');
    modal.style.display="block";
}


function close(){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
    console.log("hallo");
};

function save(textarea){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
    textarea.value
    //TODO: Insert textdescription
    //var description=document.getElementById("taskDescription");
    //var inputtext=document.createTextNode();
}