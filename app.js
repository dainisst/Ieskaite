function myFunction() {  
  document.getElementById("outputContainer").innerHTML = `<div>Šis teksts ir ievietots ar JS</div>`;
}

$(document).ready(function(){ 
  $('p').click(function(){
    $(this).dialog();
  })
});

form = document.querySelector("form");
        form.onsubmit = function(event){
            formErrors = "";
            
            if(document.querySelector('ul')){
                document.querySelector('ul').remove();
            }
            event.preventDefault();
           if(form[0].value.length<3){
                formErrors +="<li>Vārdam jabūt garākam par 3 simboliem</li>"
           } 
           if(form[1].value.length<3){
                formErrors +="<li>Uzvārdam jabūt garākam par 3 simboliem</li>"
           } 
           if(form[2].value.length<10){
                formErrors +="<li>Ziņojumam jābūt garākam par 10 simboliem</li>"
           }
          
           form.innerHTML += `
            <ul>
                ${formErrors}
            </ul>    
           `;
           if(!formErrors){
            form.submit();
           }
        }
