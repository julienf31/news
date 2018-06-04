import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsPreviewComponent } from './news/news-preview/news-preview.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewsComponent,
    NewsListComponent,
    NewsDetailsComponent,
    NewsPreviewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
