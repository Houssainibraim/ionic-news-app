import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {
  newsArray:any = [];
  constructor(private router:Router , private service : NewsServiceService) { }
  
  ngOnInit() {
    this.loadHeadLines('health')
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
