document.addEventListener("DOMContentLoaded",()=>{

const button=document.querySelector("button");

if(button){

button.addEventListener("click",(e)=>{

const form=
document.querySelector(".contact-form");

if(form){

const inputs=
form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(field=>{

if(field.value.trim()===""){

valid=false;

}

});

if(!valid){

e.preventDefault();

alert(
"Please fill all fields."
);

}

else{

alert(
"Message sent successfully!"
);

}

}

});

}

});