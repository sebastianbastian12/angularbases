import { Component } from "@angular/core";
@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>
  <button (click)='operacion(+1)'>+1</button>
  <span>{{numero}}</span>
  <button (click)='operacion(-1)'>-1 </button>

  <h3>La base es: <strong>{{numero3}}</strong></h3>
  <button (click)="operacion(numero2)">+{{numero2}}</button>
  <span>{{numero3}}</span>
  <button (click)="operacion(-numero2)">-{{numero2}}</button>
  `
})

export class ContadorComponent {
  public title: string = 'Contador App';
  public numero: number = 10;
  public numero2: number = 5;//Este es el que suma//
  public numero3: number = 5;//Este el que incrementa con la suma//

  /*Esta es una manera de hacerlo singular
  con el simbolo, en este caso sumar y restar
  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }*/

  /*Otra manera de hacerlo pero en el mismo metodo es asi*/

  operacion(valor:number){//Este es el que suma//
    this.numero3 += valor;//Este el que incrementa con la suma//
  }
}
