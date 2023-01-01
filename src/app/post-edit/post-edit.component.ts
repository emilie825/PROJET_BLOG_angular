import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../author';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  posts!:Post;

  id: number = 1;
  post_title: string = '';
  author_id: number = 0;
  image_url: string = '';
  post_resume: string = '';
  content: string = '';

  list:Author[]=[]

  constructor(private httpClient:HttpClient, private rout:ActivatedRoute) { }


  //j'affiche les données de l'ID que je recupère avec route
  ngOnInit(): void {
    this.id=this.rout.snapshot.params['ID']
    this.getPost().subscribe(P=>{
      this.posts=P;
    })
    

  }
//je recupère les données par la methode Get
  public getPost():Observable<any>{
    return this.httpClient.get('http://102304.bloggy.ecole-it.devigne.space/posts/'+this.id) 
  }

  saveData(){}
}
