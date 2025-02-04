function eye() {
    var x = document.getElementById("passField");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

