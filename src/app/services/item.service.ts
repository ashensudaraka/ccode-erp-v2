import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { urls } from '../base_url/base_url';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: Http) { }

  getAllItemDetails() {
    //http://34.240.8.179:8084/v1/api/item/?itemStatus=active
    let searchUrl = urls.url + "/item/?itemStatus=active";
    return this.http.get(searchUrl)
      .pipe(map(res => res));
  }

  getFilteredItemDetails(itemCode, itemName, itemType) {
    //http://34.240.8.179:8084/v1/api/item/search?itemCode=xxx&itemName=xxx
    let searchUrl = urls.url + "/item/search?itemCode=" + itemCode + "&itemName=" + itemName + "&itemType=" + itemType;
    return this.http.get(searchUrl)
      .pipe(map(res => res));
  }

  getItemTypeDetails() {
    //http://34.240.8.179:8084/v1/api/itemType/
    let searchUrl = urls.url + "/itemType/";
    return this.http.get(searchUrl)
      .pipe(map(res => res));
  }

  getUomDetails() {
    //http://34.240.8.179:8084/v1/api/uom/
    let searchUrl = urls.url + "/uom/";
    return this.http.get(searchUrl)
      .pipe(map(res => res));
  }

  addItemDetail(addRecord) {
    let headers = new Headers();
    headers.append('content-type', 'application/json ');

    return this.http.post('/item/', addRecord, { headers: headers })
      .pipe(map(res => res));
  }


}
