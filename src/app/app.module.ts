import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardHttpService } from './card-http.service';
import {HttpClientModule} from '@angular/common/http';

import {HttpClient} from '@angular/common/http';

import { BookViewComponent } from './book-view/book-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { RatingModule } from 'ng-starrating';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RatingModule,
    StarRatingModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'book/:charId', component: BookViewComponent}
    ])
  ],
  providers: [CardHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
