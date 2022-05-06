// EJERCICIO 5 - Login ● Código - Clase4 viernes 29 abril

// EJERCICIO EN LÍNEA
/* ...funcionalidad de ingreso de datos...
rotulo1.innerHTML = "Por favor ingrese el usuario: ";
rotulo2.innerHTML = "Por favor ingrese la clave: ";*/

/* • Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.*/
/* • Considerar que tanto el usuario como la contraseña están
formados sólo por letras.*/
/* • El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan */

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese usuario ";
rotulo2.innerHTML = "Ingrese su password";

btnEnviar.addEventListener("click", () => {
  let password: string = "claveJuan";
  let usuario: string = "Juan";

  let usuarioIngresado: string = dato1.value;
  let passwordIngresado: string = dato2.value;

  if (usuario === usuarioIngresado && password === passwordIngresado) {
    console.log("¡Usted ha ingresado correctamente!");
  } else {
    console.log("Usuario o password incorrectos");
  }
});
