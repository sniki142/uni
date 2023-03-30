function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "123") {
      window.location.href = "unicorn.html";
    } else {
      document.getElementById("error-message").innerHTML = "Incorrect username or password.";
    }
  }

  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (username === "sniki" && email === "heinoanc@gmail.com"  && password === "admin") {
      window.location.href = "unicorn.html";
    } else {
      document.getElementById("error-message").innerHTML = "Incorrect username or email or password.";
    }
  }

  function Register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (username === "" && password === "") {
      window.location.href = "unicorn.html";
    } else {
    }
  }