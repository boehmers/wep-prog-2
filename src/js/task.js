/**
 * Created by Markus on 20.05.2016.
 */
var taskBox;
var modal;

function add(){
    taskBox=document.getElementById('taskBox');
    modal = document.getElementById('modalDialog');
    taskBox.style.display="block";
    modal.style.display="block";
    //TODO: save text to taskBox
};

function close(){
    taskBox=document.getElementById('taskBox')
    modal = document.getElementById('modalDialog');
    taskBox.style.display="none";
    modal.style.display="none";
    console.log("close");
};

function save(){
    taskBox=document.getElementById('taskBox')
    modal = document.getElementById('modalDialog');
    taskBox.style.display="none";
    modal.style.display="none";

    //TODO: Insert textdescription
    //var description=document.getElementById("taskDescription");
    //var inputtext=document.createTextNode();
}