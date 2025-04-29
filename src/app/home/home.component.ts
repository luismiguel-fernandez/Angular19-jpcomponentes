import { Component } from '@angular/core';
import { RemoteApiService } from '../remote-api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  constructor(private data:RemoteApiService) {}

  getArticulos() {
    return this.data.getArticulos();
  }
}
