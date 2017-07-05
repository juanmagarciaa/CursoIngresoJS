function Mostrar()
{
//tomo la edad  

var edad; 

var DatoPositivo;

var DatoNegativo;

edad=document.getElementById("edad").value;

DatoPositivo = "usted es mayor de edad";

DatoNegativo = "usted es menor de edad";

if (edad >=18)

{

alert (DatoPositivo);

}

else 
{

alert (DatoNegativo);

}
}//FIN DE LA FUNCIÓN