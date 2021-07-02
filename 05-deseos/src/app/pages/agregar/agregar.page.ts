import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { listaItem } from '../../models/lista-item.model';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor(private deseosService: DeseosService,
              private route: ActivatedRoute) {

  const listaId = this.route.snapshot.paramMap.get('listaId');
  this.lista = this.deseosService.obtenerLista(listaId);

  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0 ) {
      return;
    }

    const nuevoItem = new listaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.deseosService.guardarStorage();

    this.nombreItem = '';
  }

  cambioCheck(item: listaItem){

    const pendientes = this.lista.items.filter(itemData => {
      return !itemData.completado;
    }).length;

    console.log({pendientes});

    if (pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.deseosService.guardarStorage();

    console.log(this.deseosService.listas);
  }

  borrarItem(i: number){
    this.lista.items.splice(i, 1);
    this.deseosService.guardarStorage();
  }
}
