import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Luffy'];
    heroeBorrado: string = '';

    BorrarHeroe(){
      const heroeBorrado = this.heroes.shift() || ''; //borra el primer elemento
      this.heroeBorrado = heroeBorrado;
      console.log(heroeBorrado);
      
    }
  }
