/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let obtenerID;
	obtenerID = prompt("Poner tu nombre porfavor");
	document.getElementById("elNombre").value = obtenerID;
}

