function Mostrar()
{
//tomo la edad  

var edad;

var mensaje;

mensaje = "usted no es adolescente";

edad = document.getElementById ("edad").value;

if (edad <= 12 || edad >= 18 )

{

alert (mensaje);

}


}//FIN DE LA FUNCIÓN