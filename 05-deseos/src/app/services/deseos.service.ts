import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';



@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];


  constructor() {

    this.cargarstorage();

   }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista(lista: Lista) {
    const idLista = lista.id;

    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    });
    this.guardarStorage();
  }

  obtenerLista(id: string | number){

    id = Number(id);

    return this.listas.find( listaData => {
      return listaData.id === id;
    });

  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarstorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse( localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }

}
