import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../shared/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  public new;

  constructor(private newsService: NewsService, protected route: ActivatedRoute) {
    console.log(route.snapshot.params['id']);
    this.new = newsService.findById(route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
