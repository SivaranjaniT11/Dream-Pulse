const Menu=document.querySelector('.Menu i');
const navbar=document.querySelector('.nav-head ul');

Menu.addEventListener('click',()=>{
    Menu.classList.toggle('fa-house');
    navbar.classList.toggle('slide');
});

//
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.container-box .row .product ').forEach(product =>{
    product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


function on() {
    document.getElementById("image1").src = "image/04.jpg";
}
function off() {
    document.getElementById("image1").src = "image/01.jpg";
}
function onn() {
    document.getElementById("image2").src = "image/05.jpg";
}
function offf() {
    document.getElementById("image2").src = "image/02.jpg";
}
function on1() {
    document.getElementById("image3").src = "image/06.jpg";
}
function off1() {
    document.getElementById("image3").src = "image/03.jpg";
}





const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const con_message = document.getElementById('contact_message');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInput();

});


function checkInput() {
  const usernameValue = username.value.trim();
  const emailvalue = email.value.trim();
  const con_messageValue = con_message.value.trim();


  if (usernameValue === '') {
    setError(username, 'cannot be blank');
    username.style.borderColor = "red";
    alert("Please Enter Name");
    return false;
  }
  else {
    setSuccess(username);
    username.style.borderColor = "green";
  }


  if (emailvalue === '') {
    setError(email, 'cannot be blank');
    email.style.borderColor = "red";
    alert("Please Enter Email");
    return false;
  }
  else if (!isEmail(emailvalue)) {
    setError(email, 'not valid');
    email.style.borderColor = "red";
    alert("Please valid Email");
    return false;1
  }
  else {
    setSuccess(email);
    email.style.borderColor = "green";
  }
  
  if (con_messageValue === '') {
    setError(con_message, 'cannot be blank');
    con_message.style.borderColor = "red";
    alert("Please  message type ");
    return false;
  }
  else {
    setSuccess(con_message);
    con_message.style.borderColor = "green";
  }

}
function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

}




function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
}
function setSuccess(input) {
  formControl = input.parentElement;
}

