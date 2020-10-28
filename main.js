// Get all input object

const fullName = document.forms["formv"]["fullName"];
const email = document.forms["formv"]["email"];
const phoneNumber = document.forms["formv"]["phoneNumber"];
const passWord = document.forms["formv"]["passWord"];

// get all error msg
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");

// Setting all event listeners
fullName.addEventListener("blur", verifyName, true);
email.addEventListener("blur", verifyEmail, true);
passWord.addEventListener("blur", verifyPassword, true);

// function for validation
function validate() {
  if (fullName.value == "") {
    fullName.style.border = "1px solid crimson";
    name_error.textContent = "Full name is required";
    fullName.focus();
    return false;
  }
  // email
  if (email.value == "") {
    fullName.style.border = "1px solid crimson";
    email_error.textContent = "Valid email is required";
    email.focus();
    return false;
  }
  // password
  if (passWord.value == "") {
    passWord.style.border = "1px solid crimson";
    password_error.textContent = "Please create a password";
    passWord.focus();
    return false;
  }
}

// Event handler function fullName
function verifyName() {
  if (fullName.value != "") {
    fullName.style.border = "1px solid #ffffff";
    name_error.innerHTML = "";
    return true;
  }
}
// Event handler function email
function verifyEmail() {
  if (email.value != "") {
    email.style.border = "1px solid #ffffff";
    email_error.innerHTML = "";
    return true;
  }
}
// Event handler function password
function verifyPassword() {
  if (passWord.value != "") {
    passWord.style.border = "1px solid #ffffff";
    password_error.innerHTML = "";
    return true;
  }
}
