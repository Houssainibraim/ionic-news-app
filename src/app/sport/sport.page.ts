import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {
  newsArray:any = [];
  constructor(private router : Router , private service : NewsServiceService) { }

  ngOnInit() {
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
