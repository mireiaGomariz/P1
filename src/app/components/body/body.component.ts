import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'El tiempo a veces amigo del hombre todo lo deja atrás',
    autor: 'Doble V'
  };

  rols: string[] = ['Beatrix', 'Bill' ,'Heder'];

}
