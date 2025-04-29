import { Component } from '@angular/core';
import { RemoteApiService } from '../remote-api.service';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FiltroCatPipe } from '../filtro-cat.pipe';
import { FiltroFabNamePipe } from '../filtro-fab-name.pipe';
import { FormsModule } from '@angular/forms';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-search',
  imports: [ FormsModule, FilterByNamePipe, FiltroCatPipe, FiltroFabNamePipe, ArticleCardComponent ],
  templateUrl: './search.component.html',
  styles: `
  .selected {
    // color: pink;
    font-weight: bold;
    border: 1px solid rgb(222, 213, 203);
    box-shadow: 0 0 10px rgb(222, 213, 203);
  }
  `
})
export class SearchComponent {

  pattern:string = ""
  categoria:number = 0
  fabricante:number = 0

  constructor(private data:RemoteApiService) {}

  clearFilters() {
    this.pattern = ""
    this.fabricante = 0
    this.categoria = 0
  }

  getArticulos() { return this.data.getArticulos(); }
  getCategorias() { return this.data.getCategorias(); }
  getFabricantes() { return this.data.getFabricantes(); }

  getCategoria() { return this.categoria }
  getFabricante() { return this.fabricante }
  getPattern() { return this.pattern }

  setCategoria(id:number) { this.categoria = id }
  setFabricante(id:number) { this.fabricante = id }
  //setPattern() {  }
}
