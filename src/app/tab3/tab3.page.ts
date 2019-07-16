import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router:Router) {}
business(){
  this.router.navigate(['/business']);
}
general(){
  this.router.navigate(['/general']);
}
health(){
  this.router.navigate(['/health']);

}
}
