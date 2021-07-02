import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.compponent.html'
})

export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'un gran poder trae una gran responsabilidad',
        autor: 'Tio Ben'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Octopus'];
}
