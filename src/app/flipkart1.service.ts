import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Flipkart1Service {

  constructor(private _httpClient:HttpClient) { }
  getflikarts():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products");
  }
}
