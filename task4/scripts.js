function validateForm() {
	const username = documnet.getElementById("username");
	const email = documnet.getElementById("email");
	const password = documnet.getElementById("password");
	const confirmPassword = documnet.getElementById("confirmPassword");

	const usernameError = documnet.getElementById("usernameError");
	const emailError = documnet.getElementById("emailError");
	const passwordError = documnet.getElementById("passwordError");
	const confirmPasswordError = documnet.getElementById("confirmPasswordError");

usernameError.innerHTML = "";
emailError.innerHTML = "";
passwordError.innerHTML = "";
confirmPasswordError.innerHTML = "";

let isValid = true;

if(username.value === "") {
	usernameError.innerHTML = "PLease enter your username.";
	isValid = false;
}

if (email.value === "") {
	emailError.innerHTML = "PLease enter your email";
	isValid = false;
}

if(password.value === "") {
	passwordError.innerHTML = "PLease enter your password.";
	isValid = false;
} else if (password.value.length < 8) {
	passwordError.innerHTML = "Password must be at least 8 characters long.";
	isValid = false;
}

if(confirmPassword.value === "") {
	confirmPasswordError.innerHTML = "PLease confirm your password.";
	isValid = false;
} else if (password.value !== confirmPassword.value) {
	confirmPasswordError.innerHTML = "Passwords do not match.";
	isValid = false;
}
return isValid;
}