import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

cities: string[] = ['Miami','Washington', 'Oregon','Salt Lake City'];
ciudadBorrada: string = '';

borrarCiudad(){
 this.ciudadBorrada= this.cities.shift() || '';
}

lenguages: string[] = ['Java', 'JavaScript','Python', 'Ajax'];
lenguageBorrado: string = '';
borrarLenguage(){
  this.lenguageBorrado = this.lenguages.shift() || '';
}

}
