import { Component, OnInit} from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{



  constructor(private newsservice:NewsServiceService, private router : Router) {

  }
  datas : any;
  ngOnInit(){
//    this.newsservice.getData(){}
this.newsservice.getData('top-headlines?q=trump').subscribe(data =>{
console.log(data);
this.datas = data;

});


  }

onGoToSinglePage(article){
  //this.newsservice.currentArticle = article;
  this.router.navigate(['/news-single', { 'title': article.title, 'desc': article.description, 'img': article.urlToImage, 'url': article.url }]);
}


}
