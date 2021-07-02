import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  idioma = 'es-CL';
  videoURL = 'https://www.youtube.com/embed/5qap5aO4i9A';

  nombre = 'Capitán América';
  nombre2 = 'joSE vEnEgaS AguilERa';
  arreglo = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.235;
  salario = 1234.5;
  fecha = new Date();
  contrasena = false;

  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  };

  promesa = new Promise<string> ((resolve) => {

    setTimeout( () => {
      resolve('llego la data');
    }, 1000);
  });
}
