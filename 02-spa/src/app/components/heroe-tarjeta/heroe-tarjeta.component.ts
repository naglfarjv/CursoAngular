import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

   verHeroe(): void{
     this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index)
   }
}
