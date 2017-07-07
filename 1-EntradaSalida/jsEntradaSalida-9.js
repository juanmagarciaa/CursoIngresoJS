/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var ingreso;

var resultado;

var aumento;

ingreso = document.getElementById("sueldo").value;

ingreso =parseInt(ingreso);

resultado = ingreso*1.10;

alert (resultado)




}
