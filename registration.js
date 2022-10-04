const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
});



//Registration Form
function validation() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var address = document.getElementById('address').value;
    var emailaddress = document.getElementById('emailaddress').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('confirmpassword').value;

//Firstname Validation
    if (firstname == "") {
        alert("Input your firstname please!");
        return false;
    }
    if (firstname.length <= 2) {
        alert("First name must have at least 2 characters!");
        return false;
    }
    if (firstname.length >= 25) {
        alert("First name must not have 25 characters!");
        return false;
    }

//Lastname Validation
    if (lastname == "") {
        alert("Fill up the last name please!");
        return false;
    }
    if (lastname.length < 2) {
        alert("Last name must be at least 2 characters");
        return false;
    }
    if (lastname.length > 25) {
        alert("Last name must not exceed 25 characters");
        return false;
    }

//Address Validation
    if (address == "") {
        alert("Fill up the address please!");
        return false;
    }

//Email Address Validation
    if (emailaddress == "") {
        alert("Fill up the email please!");
        return false;
    } else {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        var x = re.test(emailaddress);
        if (x) {

        } else {
            alert("Format of email must be valid");
            return false;
        }
    }

//Password Validation
    if (password == "") {
        alert("Fill up the password please!");
        return false;
    }

//Confirm Password Validation
    if (password2 !== password) {
        alert("Your password did not match!");
        return false;
    }

    return true;
}
