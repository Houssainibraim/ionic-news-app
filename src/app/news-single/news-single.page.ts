import { Component, OnInit } from '@angular/core';
//import { NewsServiceService } from '../news-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  newsData: any;
headLine: any;
description: any;
image: any;
url: any;
content:any;
  constructor(private actRoute : ActivatedRoute) {
}
  ngOnInit() {
        //this.article = this.newsservice.currentArticle;
        this.headLine = this.actRoute.snapshot.paramMap.get('title');
        this.description = this.actRoute.snapshot.paramMap.get('desc');
        this.image = this.actRoute.snapshot.paramMap.get('img');
        this.url = this.actRoute.snapshot.paramMap.get('url');
        this.content = this.actRoute.snapshot.paramMap.get('content');

  }
}
