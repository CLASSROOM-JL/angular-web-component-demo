import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { DataService } from '../data.service';
import {NewsReqInterface} from '../interfaces/news-req.interface';
import {NewsInterface} from '../interfaces/news.interface';

@Component({
  selector: 'news-widget',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit , OnChanges {

  @Input() articles: NewsInterface[]  = [];
  @Output() readFullAction: EventEmitter<NewsInterface> = new EventEmitter<NewsInterface>();
  constructor(private dataService: DataService) { }
  ngOnInit() {

    if (!this.articles.length) {
      // @ts-ignore
      this.dataService.get().subscribe((data: NewsReqInterface) => {
        this.articles = !this.articles.length ? data.articles.map( a => a as NewsInterface) : this.articles;
        console.log(data);
      });
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (typeof this.articles  === 'string') {
        const  inputData = JSON.parse(this.articles);
        this.articles = inputData;
        console.log('INPUT DATA ', this.articles );
      }
    }
  }

}
