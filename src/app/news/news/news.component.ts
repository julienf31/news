import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from '../shared/news.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  public news;
  protected newsSubscription: Subscription;

  constructor(private newsService: NewsService) {
    this.newsSubscription = this.newsService.news$.subscribe((updatedNews) => {
      this.news = updatedNews;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.newsSubscription) {
      this.newsSubscription.unsubscribe();
    }
  }

}
