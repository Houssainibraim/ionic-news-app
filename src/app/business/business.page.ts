import { NewsServiceService } from '../news-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  newsArray: any = [];

  constructor(private service:NewsServiceService ,private router:Router) {}

  ngOnInit() {
    this.loadHeadLines('business');
  }
  loadHeadLines(category) {
      this.service.getNewsByCategory(category).subscribe(news => {
          this.newsArray = news['articles'];
          console.log(this.newsArray);
      });
  }
  onGoToSinglePage(article){
    //this.newsservice.currentArticle = article;
    this.router.navigate(['/news-single', { 'title': article.title, 'desc': article.description, 'img': article.urlToImage, 'url': article.url }]);
  }
  back(){
    this.router.navigate(['../tabs/tab3']);
  }
}
