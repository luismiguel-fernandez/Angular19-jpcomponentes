import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFabName'
})
export class FiltroFabNamePipe implements PipeTransform {

  // recibe un array de articulos y devuelve el mismo array filtrado por un fabricante
  transform(arrayEntrada: any[], fab: number): any[] {
    if (fab == 0) {
      return arrayEntrada
    } else {
      return arrayEntrada.filter(articulo => articulo.fab == fab);
    }
  }

}
