
function validationForm() {
	var tel = document.getElementById('tel').value;
	var email1 = document.getElementById('mail').value;
	var email2 = document.getElementById('cmail').value;
	var pass1 = document.getElementById('pass').value;
	var pass2 = document.getElementById('cpass').value;


	var telReg=/^(\+?6?01)[0-9]\-*[0-9]{7,8}$/;
	var emailReg=/^[^\.\s][\w\-\.{2,}]+@([\w-]+\.)+[\w-]{2,}$/;
	var passReg=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

/*Tel*/
	if(telReg.test(tel)){
		document.getElementById('errorMsg1').innerHTML = " ";
	}
	else{
		document.getElementById('errorMsg1').innerHTML = "Please enter only Malaysia phone number.";
		return false;
	}
/*Email*/
	if(emailReg.test(email1)){
		document.getElementById('errorMsg2').innerHTML = " ";
	}
	else{
		document.getElementById('errorMsg2').innerHTML = "Invalid Email Address.";
		return false;
	}

	if(email2.match(email1)){
		document.getElementById('errorMsg3').innerHTML = " ";
	}
	else{
		document.getElementById('errorMsg3').innerHTML = "Email not match.";
		return false;
	}
/*Paassword*/
	if(passReg.test(pass1)){
		document.getElementById('errorMsg4').innerHTML = " ";
	}
	else{
		document.getElementById('errorMsg4').innerHTML = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
		return false;
	}

	if(pass2.match(pass1)){
		document.getElementById('errorMsg5').innerHTML = " ";
	}
	else{
		document.getElementById('errorMsg5').innerHTML = "Password not match.";
		return false;
	}

}

function eye() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

	var x = document.getElementById("cpass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

