/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()

{

var pregunta;

pregunta = prompt ("digame su nombre");

document.getElementById("elNombre").value= pregunta; 

alert (pregunta);

}

