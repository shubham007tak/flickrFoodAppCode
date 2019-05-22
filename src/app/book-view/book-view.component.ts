import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardHttpService } from '../card-http.service';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public allItems;
  public bookData;
  foodData: any;
  foodDetail: any;
  foodData1: any;
  singleFoodData = {};
  url: string;
  title: any;
  firstName: any;
  lastName: any;
  status: any;
  description: any;
  reason: any;
  foodId: any;
  rating: any;
  ownerName: any;


  // tslint:disable-next-line:max-line-length
  constructor( private toastr: ToastrService, private _route: ActivatedRoute, private router: Router, public cardHttpService: CardHttpService, private location: Location, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    const myCharId = this._route.snapshot.paramMap.get('charId');

    this.foodId = myCharId;
    this.spinnerService.show();
    this.foodData = this.cardHttpService.getAllFoods().subscribe(
      data => {
        this.foodData1 = data.photos.photo;

        // tslint:disable-next-line:forin
        for (const food in this.foodData1) {

          if (this.foodData1[food].id === myCharId) {
             // tslint:disable-next-line:max-line-length
          this.url = `https://live.staticflickr.com/${this.foodData1[food].server}/${this.foodData1[food].id}_${this.foodData1[food].secret}_z.jpg`;
          this.title = this.foodData1[food].title;
          this.description = this.foodData1[food].description._content;
          this.ownerName =  this.foodData1[food].ownername;
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
  goBack(): any {
    this.location.back();

  }
  public registerFunction: any = () => {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: `${this.firstName} ${this.lastName}`,
      rating: this.rating,
      reason: this.reason,
      id: this.foodId
    };
    this.cardHttpService.setUserInfoInLocalStorage(data);
          this.toastr.success('Rating provided successfully');
          setTimeout(() => {
            this.router.navigate(['/']);
           }, 2000);
  }

}
