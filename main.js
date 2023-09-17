// sign up function

function signup(e) {
    event.preventDefault();
    // console.log("working");

    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = {
        email: email,
        username: username,
        password: password
    };

    var json = JSON.stringify(user);
    localStorage.setItem("user", json);
    console.log('user added');
}