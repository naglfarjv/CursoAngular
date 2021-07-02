import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styles: [
  ]
})
export class BusquedaHeroeComponent implements OnInit {

  heroesBusqueda: Heroe[] = [];
  termino: string;

  constructor( private _heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute)
              { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroesBusqueda = this._heroesService.buscarHeroe(params['busqueda']);
      this.termino = params['busqueda'];
      console.log(this.heroesBusqueda);
    });
  }

  verHeroe(index: number): void{
    this.router.navigate(['/heroe', index]);
  }
}
