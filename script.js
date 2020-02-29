//Variables
var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var confirmNumerical = "0123456789";
var confirmSpecial = "~!@#$%^&*()_+";
var password = "";

var button = document.getElementById("generate");

//First Click Event
button.addEventListener("click", generate);

function addCase(type, selectedCase) {
    return selectedCase + type;
}

function generate() {
    password = "";
    getLength = prompt("How long will your new password be? Please enter a number between 8 and 128.");

    if ((getLength < 8) || (getLength > 128)) {
        alert("Try again. Please enter a number between 8 and 128.");
        generate();
        return;
    } 


var userNumerical = confirm("Do you want your password to include numbers?");
var userUpper = confirm("Do you want your password to include upper case?");
var userLower = confirm("Do you want your password to include lower case?");
var userSpecial = confirm("Do you want your password to include special characters?");

var selectedCase = "";

    if (userUpper === true) {
        selectedCase = addCase(confirmUpper, selectedCase);
    }
    if (userLower === true) {
        selectedCase = addCase(confirmLower, selectedCase);
    }
    if (userNumerical === true) {
        selectedCase = addCase(confirmNumerical, selectedCase);
    }
    if (userSpecial === true) {
        selectedCase = addCase(confirmSpecial, selectedCase);
    }

    for (var i = 0; i <= getLength; i++) {

        password = password + selectedCase.charAt(Math.floor((Math.random() * selectedCase.length) - 1));
    }
    selectedCase = ""; 
    
    document.getElementById("password").textContent = password;
}



