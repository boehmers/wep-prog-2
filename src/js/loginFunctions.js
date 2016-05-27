var regModal;

function pressRegisterButton() {
    //show modal dialog
    regModal = document.getElementById('registerDialog');
    regModal.style.display="block";
}

function clickDropdown(){
    document.getElementById("colorDropdown").classList.toggle("show");
    
    window.onclick = function(event) {
        if(!event.target.matches('.btn')){
            var dropdowns = document.getElementsByClassName("colorDropdownContent");
            
            var i;
            for(i = 0; i < dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function closeRegDialog(){
    regModal = document.getElementById("registerDialog");
    regModal.style.display="none";
};