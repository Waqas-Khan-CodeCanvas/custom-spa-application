import { showAlert } from "../public/utilities/showAlert.js";
import { addUserAccount } from "../model/todoModel.js";

function Register(event) {
    event.preventDefault();
    const { name: { value: name }, email: { value: email }, password: { value: password } } = event.target;;

    // Validate input fields
    if (!name || !email || !password) {
        showAlert("All fields are required.", "danger");
        return;
    }
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        showAlert("User already exists.", "danger");
        return;
    }

    // Register new user
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    addUserAccount(users)
    showAlert("Registration successful! You can now log in.");
    event.target.reset()
    updateIndexPage("login");
}


function Login(event) {
  event.preventDefault();
  const { email: { value: email }, password: { value: password } } = event.target;
  // Validate credentials
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Save current user to localStorage
    localStorage.setItem("currentUser", JSON.stringify(user));
    showAlert("Login successful!");
    updateIndexPage("todo"); 
  } else {
    showAlert("Invalid email or password. Please try again.","danger");
  }
};
export {Login,Register}