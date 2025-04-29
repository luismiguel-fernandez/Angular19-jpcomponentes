import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCat'
})
export class FiltroCatPipe implements PipeTransform {

  // recibe un array de articulos y devuelve el mismo array filtrado por una categoría
  transform(arrayEntrada: any[], cat: number): any[] {
    if (cat == 0) {
      return arrayEntrada
    } else {
      return arrayEntrada.filter(articulo => articulo.cat == cat);
    }
  }

}
