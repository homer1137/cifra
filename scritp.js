let span = document.getElementsByClassName("close_modal_window")[0];
let modal = document.getElementById("my_modal");


function checkPassword() {
    let pas1 = document.getElementById("pas1");
    console.log(pas1.value)
    
    let pas2 = document.getElementById("pas2");
    console.log(pas2)
    
    if (pas1.value !== pas2.value) {
        alert("введенные пароли не одинаковы ");
        modal.innerHTML="<div>Пароли не равны</div>"
      } else if (pas1.value == pas2.value) {
        alert("введенные пароли одинаковы ");
        modal.innerHTML="<div>Пароли не равны</div>"
      }

}


document.getElementById("clickMe").onclick = function () {
   
    modal.style.display = "block";
    
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.onclick = function () {
    modal.style.display = "none";
 }
 