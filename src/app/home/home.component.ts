import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardHttpService } from '../card-http.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public allItems = [];
  public characterData = [];
  public bookData = [];
  public houseData = [];
  public allItems_unsort = [];
  foodData: any;
  foodDetail: any;
  ratingInfo: any;



  constructor(public cardHttpService: CardHttpService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.ratingInfo = this.cardHttpService.getUserInfoFromLocalstorage();
    this.spinnerService.show();
    this.foodData = this.cardHttpService.getAllFoods().subscribe(
      data => {
        this.foodData = data;
        this.foodDetail = data.photos.photo;
        // tslint:disable-next-line:forin
        for (const food in this.foodDetail) {
          // tslint:disable-next-line:max-line-length
          this.foodDetail[food].url = `https://live.staticflickr.com/${this.foodDetail[food].server}/${this.foodDetail[food].id}_${this.foodDetail[food].secret}_z.jpg`;
          if (this.ratingInfo !== null && this.foodDetail[food].id === this.ratingInfo.id) {
          this.foodDetail[food].rating = this.ratingInfo.rating ;
          }  else {
            // tslint:disable-next-line:no-unused-expression
            this.foodDetail[food].rating === null;
          }
        }
        this.spinnerService.hide();

      },
      error => {
        console.log('some error message');
        console.log(error.errorMessage);
      }
    );



  }



  ngOnDestroy() {
  }
}
