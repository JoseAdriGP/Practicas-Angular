import { Pipe, PipeTransform } from '@angular/core';
import { join } from 'path';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');

    if ( todas ) {
      nombres = nombres.map( nombre => {
        return nombre[0].toLocaleUpperCase() + nombre.substr(1);
      });
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }

}
