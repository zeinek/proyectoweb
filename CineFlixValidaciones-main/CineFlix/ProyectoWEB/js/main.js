const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	const emailValue = email.value.trim();
		
	if(emailValue === '') {
		alert('Campo de email vacío');
	} else if (!isEmail(emailValue)) {
		alert('No ingresó un email válido');
	} else {
		setSuccessFor(email);
	}
	
});

function checkInputs () {
   
	var p1 = document.getElementById("password").value;
	var p2 = document.getElementById("password2").value;
	var espacios = false;
	var cont = 0;
	  while (!espacios && (cont < p1.length)) {
		  if (p1.charAt(cont) == " ")
			  espacios = true;
		  cont++;
	  }
	if (espacios) {
	 alert ("La contraseña no puede contener espacios en blanco");
	 return false;
	}	 
	if (p1.length == 0 || p2.length == 0) {
	 alert("Los campos de la contraseña no pueden quedar vacios");
	 return false;
	}
	if (p1 != p2) {
	 alert("Las contraseñas deben coincidir");
	 return false;
	} else {
	 alert("Cuenta creada correctamente. Ya puede iniciar sesión");
	 return true; 
	}
	
   }
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

