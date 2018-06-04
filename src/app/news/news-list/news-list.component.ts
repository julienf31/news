import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NewsService} from '../shared/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public news;
  protected newsSubscription: Subscription;

  constructor(private newsService: NewsService) {
    this.newsSubscription = this.newsService.news$.subscribe((updatedNews) => {
      this.news = updatedNews;
    });
  }

  ngOnInit() {
  }

}
