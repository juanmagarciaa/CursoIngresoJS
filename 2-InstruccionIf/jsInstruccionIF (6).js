function Mostrar()
{
//tomo la edad  

var edad;

var MayorEdad;

var MenorEdad;

var Adolescente;

MayorEdad = "usted es mayor de edad";

MenorEdad = "usted es menor de edad";

Adolescente = "usted es adolescente";

edad = document.getElementById("edad").value;

if (edad <= 18)

{

alert (MayorEdad);

}

else (edad>=13 || edad<=17)

{

alert (Adolescente);    
}

{
alert (MenorEdad);

}

}//FIN DE LA FUNCIÓN