import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styles: ``
})
export class ArticleCardComponent {
  @Input() articulo:any;
}
