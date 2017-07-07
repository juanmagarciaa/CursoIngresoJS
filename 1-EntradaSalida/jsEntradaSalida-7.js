/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
var num1;
var num2;

num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

num1=parseInt(num1);

num2=parseInt(num2);

sumar=num1+num2

alert(sumar)	
	
}

function restar()
{
var num1;
var num2;

num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

num1=parseInt(num1);

num2=parseInt(num2);

restar=num1-num2

alert(restar)
	
}

function multiplicar()
{ 
var num1;
var num2;

num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

num1=parseInt(num1);

num2=parseInt(num2);

multiplicar=num1*num2

alert(multiplicar)    
	
}

function dividir()
{

var num1;
var num2;

num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

num1=parseInt(num1);

num2=parseInt(num2);

dividir=num1/num2

alert(dividir)    
	
}

