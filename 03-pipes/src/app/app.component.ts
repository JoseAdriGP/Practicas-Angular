import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre: string = 'Capitán América';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentage: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();

  idioma: string = 'es';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout( () => {
      resolve('Llegó la data');
    }, 4000);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

}
