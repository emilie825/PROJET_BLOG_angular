import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts:any;

  id: number = 1;
  post_title: string = '';
  author_id: number = 0;
  image_url: string = '';
  post_resume: string = '';
  content: string = '';

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Post>('http://102304.bloggy.ecole-it.devigne.space/posts/').subscribe(data=>{
      this.posts=data;

    })
  }

  //fonction pour afficher le conten du resume
 readmore(){
 }

}
