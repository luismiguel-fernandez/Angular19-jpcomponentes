import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteApiService {

  private url = 'https://my-json-server.typicode.com/luismiguel-fernandez/angular2022/';
  private articulos:any[] = []
  private fabricantes:any[] = []
  private categorias:any[] = []

  constructor(private http:HttpClient) {
    http.get(this.url + 'db').subscribe( (json:any) => {
      this.articulos = json.articulos;
      this.fabricantes = json.fabricantes;
      this.categorias = json.categorias;
    })
  }

  getArticulos() {
    return this.articulos;
  }

  getCategorias() {
    return this.categorias;
  }
  
  getFabricantes() {
    return this.fabricantes;
  }
}
