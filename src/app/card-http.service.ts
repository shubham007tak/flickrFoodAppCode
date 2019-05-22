import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class CardHttpService {

  // tslint:disable-next-line:max-line-length
  public baseUrl1 = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9559e780b84ad14a1d1db91ae1cc3593&tags=foods&format=json&nojsoncallback=1&per_page=300&safe_search=1&extras=description,owner_name';




  constructor(private _http: HttpClient) {
   }

   private handleError(err: HttpErrorResponse) {
    console.log('handle error Http calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }
  public getAllFoods(): any {

    const myResponse3 = this._http.get(this.baseUrl1);
    return myResponse3;

  }
  public getUserInfoFromLocalstorage = () => {
    try {
    return JSON.parse(localStorage.getItem('userInfo'));
    } catch (exception) {
      console.error(exception);
    }
}

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }



}
