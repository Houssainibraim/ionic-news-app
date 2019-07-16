import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  newsArray:any = [];
  constructor(private service:NewsServiceService , private router:Router) { }

  ngOnInit() {
    this.loadHeadLines('general');
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
