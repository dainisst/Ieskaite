function myFunction() {  
  document.getElementById("outputContainer").innerHTML = `<div>Šis teksts ir ievietots ar JS</div>`;
}

$(document).ready(function(){ 
  $('p').click(function(){
    $(this).dialog();
  })
});




// 5. Pievienot JS kodu:

// 5.1. Izmantojot JS ievietot dokumentā jaunu DIV elementu un ievietot tajā tekstu:

// "Šis teksts ir ievietots ar JS";

// 5.2. Izmantojot JS visiem rindkopas elementiem pievienot "click" notikumu, pēc kura tiek izvadīts Dialoglodziņš ar šīs rindkopas saturu. 

// 5.3. Formai veikt lauku ievades pārbaudi, lai katrā laukā varētu ievadīt ne mazāk kā 3 simbolus (izvadīt paziņojumu)

// 5.4. Ja formā nav kļūdu, Izmantjot metodi form.submit() nosūtīt formas datus" https://www.formbackend.com/ vietnē 