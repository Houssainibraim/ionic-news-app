import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  apiURL = environment.apiURL;
  apiKEY = environment.apiKEY;
  country = 'us';
  //name = "Houssain";
  currentArticle;

  constructor(private http:HttpClient) { }
  getData(url){
    return this.http.get(`${this.apiURL}${url}&apiKEY=${this.apiKEY}`);
  }
  getNewsByCategory(category){
        const url = this.apiURL + 'top-headlines?' + this.country + '&category=' + category + '&apiKey=' + this.apiKEY;
        return this.http.get(url);
  }
}
