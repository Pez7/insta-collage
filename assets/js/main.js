var inicio = document.getElementById("iniciar");

inicio.addEventListener("click", function(){
	var user = document.getElementById("usuario").value;
	var pass = document.getElementById("pass").value;

	if (!(/^[a-z0-9ü][a-z0-9ü_]{3,9}$/.test(user)) ){
		alert("Tu nombre de usuario no debe contener espacios ni números");
	}
	if (pass == "123456" || pass == "098765" || pass.length <= 6){
	alert("La contraseña no debe ser 123456")
	}
});



