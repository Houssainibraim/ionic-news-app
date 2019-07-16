import { Component, OnInit} from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{



  constructor(private newsservice:NewsServiceService , private router : Router) {}
  datas : any;
  ngOnInit(){
//    this.newsservice.getData(){}
this.newsservice.getData('everything?q=bitcoin').subscribe(data =>{
console.log(data);
this.datas = data;

})
  }


  onGoToSinglePage(article){
    //this.newsservice.currentArticle = article;
    this.router.navigate(['/news-single', { 'title': article.title, 'desc': article.description, 'img': article.urlToImage, 'url': article.url,'content':article.content }]);
  }

}
