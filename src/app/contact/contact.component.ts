import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  posts_array:object[]=[];
  name:string='';
  email:string='';
  phone:string='';
  message:string='';
  savepost(posts:NgForm){
    /*if(posts.value.name!==undefined){*/
      console.log(posts.value.message);
      this.posts_array.push(posts.value);
    /*}*/
    
  }
  constructor() { }

  ngOnInit() {
  }

}
