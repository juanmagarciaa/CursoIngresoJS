/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
var nombre;

var edad;

var resultado;

var mensaje1;

var mensaje2;

mensaje1 = "usted se llama";

mensaje2 = "y tiene";

nombre = document.getElementById ("elNombre").value;

edad = document.getElementById ("laEdad").value;

resultado = mensaje1 + nombre + mensaje2 + edad;

alert (resultado) ;

}