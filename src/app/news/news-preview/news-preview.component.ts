import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() img: string;
  @Input() text: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  view() {
    this.router.navigate(['news/' + this.id]);
  }

}
