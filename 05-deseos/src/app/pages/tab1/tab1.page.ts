import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
               private router: Router,
               public alertCtrl: AlertController) {}

  async agregarLista(){

    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Canncelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if ( data.titulo.length === 0 )
            {
              return;
            }

            // tengo que crear la lista
            const listaID = this.deseosService.crearLista( data.titulo );
            console.log(listaID);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaID }`);
          }
        }
      ]
    });

    alert.present();

  }

}
