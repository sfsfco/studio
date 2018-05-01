import { Component, OnInit } from '@angular/core';
import {PlaceholderService} from '../placeholder.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  feed=[];
  term:string='';
  constructor(private feedapi:PlaceholderService) {
    this.feedapi.getNews().subscribe(NS => this.feed = NS.articles);
   }
   
  
  ngOnInit() {
  }

}
