import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, ver: boolean = false): string {

    // if (!ver) {
    //   let aux = '';
    //   for (let i = 0; i < value.length; i++) {
    //     aux += '*';
    //   }
    //   value = aux;
    // }


    return (!ver) ? '*'.repeat(value.length) : value;

    return value;
  }

}
