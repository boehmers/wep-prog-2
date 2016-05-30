<<<<<<< HEAD
/**
 * Created by Manuel on 25.05.2016.
 */
function allowDrop(ev) {
    ev.preventDefault();
}   

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
=======
/**
 * Created by Manuel on 25.05.2016.
 */
function allowDrop(ev) {
    ev.preventDefault();
}   

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
>>>>>>> 8d4004d67a7d9f410a11da3592a7e996f17ff286
}