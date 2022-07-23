
 //login
 let span2 = document.getElementsByClassName("close_modal_window")[0];
 let modal = document.getElementById("my_modal");

 document.getElementById("clickMe2").onclick = function () {
   
    modal.style.display = "block";
    
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span2.onclick = function () {
    modal.style.display = "none";
 }