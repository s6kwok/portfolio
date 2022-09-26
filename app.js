function PassWord() {
    answer="happy-reading";
    input=window.prompt("This is a password protected case study! Please enter in the password to read more.", "");
    if (input === answer) {
        // history.go(index.html)
        window.location.href = "lcbo.html";
    }
    else if (input === null) {
        return;
    }
    else {
        window.alert("The password you have entered is incorrect. Please try again, or send me a message for the password!");
    }
}

function login() {
    // Prompt user for case study password.
    input=window.prompt("This is a password protected case study! Please enter in the password to read more.", "");
    password = input

    // Get all our input fields.
    email = 'stacykwok01@gmail.com'
    // password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        window.location.href = "lcbo.html";
    })
    .catch(function(){
        // Firebase will use this to alert of its errors.
        var error_code = error.error_code
        var error_message = error.error_message

        alert(error_message)
    })

}