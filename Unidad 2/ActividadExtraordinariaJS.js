var Nombre, Carnet;
var Opcion = 1;
while (Opcion != 2 ) {
  Nombre = prompt("Ingresa tu Nombre: ");
  Carnet = prompt("Ingresa su Numero de Carnet: ");
  var Num_Computadora;
  Num_Computadora = Math.floor(Math.random() * 9) + 1;
  var Num_Usuario = parseInt(prompt("Ingresa un Numero: "));
  while (Num_Usuario<3 || Num_Usuario>6) {
  Num_Usuario = parseInt(prompt("Ingresa nuevamente un Numero: "));
  }
  var Adivina;
  Adivina = prompt("Adivina si el numero que ingresaste es Mayor, Menor o Igual al numero que la Computadora genero: ");

  if (Num_Computadora > Num_Usuario) {
    if (Adivina === "Menor") {
      alert("La computadora eligio el Numero: " + Num_Computadora + " y el Usuario eligio el Numero: " + Num_Usuario);
      alert("Su eleccion fue: " + Adivina + ", Has Adivinado");
    }
    else {
      alert("La computadora eligio el Numero: " + Num_Computadora + " y el Usuario eligio el Numero: " + Num_Usuario);
      alert("Su eleccion fue: " + Adivina + ", Has Perdido");
    }
  }
  else if (Num_Computadora < Num_Usuario) {
    if (Adivina === "Mayor") {
      alert("La computadora eligio el Numero: " + Num_Computadora + " y el Usuario eligio el Numero: " + Num_Usuario);
      alert("Su eleccion fue: " + Adivina + ", Has Adivinado");
    }
    else {
      alert("La computadora eligio el Numero: " + Num_Computadora + " y el Usuario eligio el Numero: " + Num_Usuario);
      alert("Su eleccion fue: " + Adivina + ", Has Perdido");
    }
  }
  else {
    if (Adivina === "Igual") {
      alert("La computadora eligio el Numero: " + Num_Computadora + " y el Usuario eligio el Numero: " + Num_Usuario);
      alert("Su eleccion fue: " + Adivina + ", Has Adivinado");
    }
    else {
      alert("La computadora eligio el Numero: " + Num_Computadora + " y el Usuario eligio el Numero: " + Num_Usuario);
      alert("Su eleccion fue: " + Adivina + ", Has Perdido");
    }
  }

alert("¿Deseas volver a Jugar?");
Opcion = prompt("1)Si               2)No");
Opcion = parseInt(Opcion);
}
if (Opcion == 2 ) {
  alert("Muchas gracias por haber participado " + Nombre + ", con el Numero de Carnet: " + Carnet);
}