var modal = document.getElementById('modalDialog');
var button = document.getElementById('addTaskBtn');
var span = document.getElementsByClassName('close')[0];

button.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}