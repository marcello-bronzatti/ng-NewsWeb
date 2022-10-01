import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
  private newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9636ea9c644c4ccc906909b0f13ac28f';
  private techApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9636ea9c644c4ccc906909b0f13ac28f';
  private businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9636ea9c644c4ccc906909b0f13ac28f';


  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  techNews() :Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  businessNews() :Observable<any>{
    return this._http.get(this.businessApiUrl);
  }

}