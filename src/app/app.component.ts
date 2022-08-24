import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewsInterface} from './interfaces/news.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() data: NewsInterface[] = [] ;
  @Output() readFullAction: EventEmitter<NewsInterface> = new EventEmitter<NewsInterface>();
  title = 'angular-web-component';

  ngOnInit(): void {
    console.log('INPUT DATA app-root', this.data);
  }
}
