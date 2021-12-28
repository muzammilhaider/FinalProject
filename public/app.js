const firebaseConfig = {
  apiKey: "AIzaSyCvHdsuxp4pbKjOL4x-xw07-m6SK-Xo--c",
  authDomain: "project-4f76f.firebaseapp.com",
  projectId: "project-4f76f",
  storageBucket: "project-4f76f.appspot.com",
  messagingSenderId: "358629799807",
  appId: "1:358629799807:web:69eddf9c31a08ed247cc4a"
};

const app = firebase.initializeApp(firebaseConfig);
function submitData(){
    var name     = document.getElementById('name');
    var email    = document.getElementById('email');
    var contact  = document.getElementById('contact');
    var message  = document.getElementById('message');
    var regex    =/^([a-zA-Z0-9\-\_\.]{1,30})+\@+([a-zA-Z]{3,25})+\.+([a-zA-Z]{2,3})$/;
    var error    = false;
    if(name.value == ""){
        document.getElementById('name-error').innerHTML = "Please enter name";
        document.getElementById('name-error').style.color = "red";
        error = true;
    }
    if(name.value.length < 4 && name.value.length >= 1){
        document.getElementById('name-error').innerHTML = "Please enter atleast 4 characters";
        document.getElementById('name-error').style.color = "red";
        error = true;
    }
    if(name.value.match(/[^a-z ]/gi)){
        document.getElementById('name-error').innerHTML = "Invalid input";
        document.getElementById('name-error').style.color = "red";
        error = true;
    }
    if(name.value.length >= 4){
        document.getElementById('name-error').innerHTML = "";
    }
    if(email.value == ""){
        document.getElementById('email-error').innerHTML = "Please enter email";
        document.getElementById('email-error').style.color = "red";
        error = true;
    }
    if(regex.test(email.value) == false && email.value != ""){
        document.getElementById('email-error').innerHTML = "Please enter correct email";
        document.getElementById('email-error').style.color = "red";
        error = true;
    }
    if(regex.test(email.value) == true){
        document.getElementById('email-error').innerHTML = "";
    }
    if(contact.value.length < 12){
        document.getElementById('contact-error').innerHTML = "Please enter correct contact number";
        document.getElementById('contact-error').style.color = "red";
        error = true;
    }
    if(contact.value == ""){
        document.getElementById('contact-error').innerHTML = "Please enter contact number";
        document.getElementById('contact-error').style.color = "red";
        error = true;
    }
    if(contact.value.length == 12){
        document.getElementById('contact-error').innerHTML = "";
    }
    if(message.value == ""){
        document.getElementById('msg-error').innerHTML = "Please enter message";
        document.getElementById('msg-error').style.color = "red";
        error = true;
    }
    if(message.value.length <= 6){
        document.getElementById('msg-error').innerHTML = "Please enter atleast 6 characters";
        document.getElementById('msg-error').style.color = "red";
        error = true;
    }
    if(message.value.length > 6){
        document.getElementById('msg-error').innerHTML = "";
    }
    if(!error){
        var key = app.database().ref("/").push().key
        var contactData = {
            name: name.value,
            email: email.value,
            contact: contact.value,
            message: message.value,
            key : key
        }
        app.database().ref("/contactData/").child(key).set(contactData);
        document.getElementById('contact-alert').classList.remove('d-none');
        name.value = "";
        email.value = "";
        contact.value = "";
        message.value = "";
        setTimeout(function(){
            document.getElementById('contact-alert').classList.add('d-none');
        },4000)
    }
}

function showMission(myDiv){
    var details = document.getElementById('mission-details');
    if(details.classList.contains('d-none')){
        details.classList.remove('d-none');
        myDiv.lastElementChild.src = "./images/uparrow.jpg";
    }else{
        details.classList.add('d-none');
        myDiv.lastElementChild.src = "./images/downarrow.png";
    }
}
function showVission(myDiv){
    var details = document.getElementById('vission-details');
    if(details.classList.contains('d-none')){
        details.classList.remove('d-none');
        myDiv.lastElementChild.src = "./images/uparrow.jpg";
    }else{
        details.classList.add('d-none');
        myDiv.lastElementChild.src = "./images/downarrow.png";
    }
}
function viewPrd(view){
    var viewPrdImg = view.parentElement.parentElement.firstElementChild;
    var viewPrdtitle = view.parentElement.parentElement.firstElementChild.nextElementSibling;
    var showImg = document.getElementById('prd-img');
    var showtitle = document.getElementById('prd-title');
    showImg.src = viewPrdImg.src;
    showtitle.innerHTML = viewPrdtitle.innerHTML;
    var viewPrdDesc = document.getElementById('prd-desc');
    viewPrdDesc.innerHTML = viewPrdtitle.nextElementSibling.innerHTML;
}

$(document).ready(function($){
    $("#contact").mask("9999 9999999");
});