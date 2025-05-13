import { ReturnedComponent } from "./src/app.js";
import {loadUsers} from "./controller/todoController.js" 
import { Login , Register } from "./controller/userController.js";

document.addEventListener("DOMContentLoaded", () => {
  loadUsers()
  if (window.location.pathname.includes("index.html")) {
    const currentUser = localStorage.getItem("currentUser");
    currentUser ? updateIndexPage("todo") : updateIndexPage("login");
  }
});

window.updateIndexPage = function(component){
     ReturnedComponent(component).then((html) => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("root").append(html)
  });
}
window.loginUser = function(event){
  Login(event)
}

window.registerUser = function(event){
  Register(event)
}