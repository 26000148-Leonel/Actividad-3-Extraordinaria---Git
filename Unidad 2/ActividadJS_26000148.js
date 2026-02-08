var mes, dia;
mes = prompt("Ingresa el mes de Nacimiento: ");
dia = prompt("Ingresa el dia de Nacimiento: ");
mes = parseInt(mes);
dia = parseInt(dia);
switch (mes) {
  case 1:
    alert("Ingresaste el mes de Enero, el dia " + dia);
    break;
  case 2:
    alert("Ingresaste el mes de Febrero, el dia " + dia);
    break;
  case 3:
    alert("Ingresaste el mes de Marzo, el dia " + dia);
    break;
  case 4:
    alert("Ingresaste el mes de Abril, el dia " + dia);
    break;
  case 5:
    alert("Ingresaste el mes de Mayo, el dia " + dia);
    break;
  case 6:
    alert("Ingresaste el mes de Junio, el dia " + dia);
    break;
  case 7:
    alert("Ingresaste el mes de Julio, el dia " + dia);
    break;
  case 8:
    alert("Ingresaste el mes de Agosto, el dia " + dia);
    break;
  case 9:
    alert("Ingresaste el mes de Septiembre, el dia " + dia);
    break;
  case 10:
    alert("Ingresaste el mes de Octubre, el dia " + dia);
    break;
  case 11:
    alert("Ingresaste el mes de Noviembre, el dia " + dia);
    break;
  case 12:
    alert("Ingresaste el mes de Diciembre, el dia " + dia);
    break;
  default:
    alert("Ingresaste un numero que no corresponde a ningun mes.");
    break;
}

if (((dia>=21 && dia<=31) && mes==3) || ((dia<=20 && dia>=1) && mes==4)) {
  alert("Tu signo es Aries");
} 
else if (((dia>=21 && dia<=30) && mes==4) || ((dia<=20 && dia>=1) && mes==5)) {
  alert("Tu signo es Tauro");
} 
else if (((dia>=21 && dia<=31) && mes==5) || ((dia<=20 && dia>=1) && mes==6)) {
  alert("Tu signo es Geminis");
} 
else if (((dia>=21 && dia<=30) && mes==6) || ((dia<=22 && dia>=1) && mes==7)) {
  alert("Tu signo es Cancer");
} 
else if (((dia>=23 && dia<=31) && mes==7) || ((dia<=23 && dia>=1) && mes==8)) {
  alert("Tu signo es Leo");
} 
else if (((dia>=24 && dia<=31) && mes==8) || ((dia<=22 && dia>=1) && mes==9)) {
  alert("Tu signo es Virgo");
} 
else if (((dia>=23 && dia<=30) && mes==9) || ((dia<=23 && dia>=1) && mes==10)) {
  alert("Tu signo es Libra");
} 
else if (((dia>=24 && dia<=31) && mes==10) || ((dia<=22 && dia>=1) && mes==11)) {
  alert("Tu signo es Escorpio");
} 
else if (((dia>=23 && dia<=30) && mes==11) || ((dia<=21 && dia>=1) && mes==12)) {
  alert("Tu signo es Sagitario");
} 
else if (((dia>=22 && dia<=31) && mes==12) || ((dia<=20 && dia>=1) && mes==1)) {
  alert("Tu signo es Capricornio");
}
else if (((dia>=21 && dia<=31) && mes==1) || ((dia<=19 && dia>=1) && mes==2)) {
  alert("Tu signo es Acuario");
} 
else if (((dia>=20 && dia<=28) && mes==2) || ((dia<=20 && dia>=1) && mes==3)) {
  alert("Tu signo es Piscis");
} 
else {
  alert("has ingresados datos incorrectos, realizalo nuevamente");
}
