/**
 * Created by Markus on 20.05.2016.
 */
var taskBox;
var modal;

function add(listID){
    //Add element
    var node = document.createElement("DIV");            
    var button = document.createElement("BUTTON");
    var buttonText = document.createTextNode("Beschreibung hinzufügen");
    button.appendChild(buttonText);
    button.addEventListener("click", modalDialog);
    node.id="task";
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
    
};

function save(){
    modal = document.getElementById('modalDialog');
    modal.style.display="none";
    //TODO: Insert textdescription
    //var description=document.getElementById("taskDescription");
    //var inputtext=document.createTextNode();
}