const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logOutForm = document.querySelector("#logOut");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LogOut(){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.classList.remove(HIDDEN_CLASSNAME);

    greeting.classList.add(HIDDEN_CLASSNAME);
    logOutForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.removeItem("USERNAME_KEY");
    greeting.innerText="";


}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY",username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}, welcome !!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logOutForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginInput.classList.add(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername===null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}

logOutForm.addEventListener("click",LogOut);