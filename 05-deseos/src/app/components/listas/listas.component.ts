import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';




@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( 'lista' ) lista: IonList;
  @Input() terminada = true;

  constructor( public deseosService: DeseosService,
               private router: Router,
               public alertCtrl: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){
    const listaID = lista.id;

    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ listaID }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaID }`);
    }

  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  async modificarLista(lista: Lista) {

    const alert = await this.alertCtrl.create({
      header: 'Modificar Lista',
      inputs: [
        {
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if ( data.titulo.length === 0 )
            {
              return;
            }
            else
            {
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.lista.closeSlidingItems();
            }
          }
        }
      ]
    });

    alert.present();
  }

}
