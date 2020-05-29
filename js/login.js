//Validación para los inputs.

function validated(){
	var statusLog = JSON.parse('{ "status":"200"}');// falta agregar la ruta del json cuando la tenga
	if (statusLog.status == 400){
		alert("Se ha iniciado sesión correctamente");
		return true;
	}else{
		alert("Email/Contraseña incorrectos, por favor ingréselos nuevamente");
		//va a tener que redireccionar a la home en caso de haber iniciado sesion ok
		location.href="../home/index.html";
		return false;
	}
		
}

