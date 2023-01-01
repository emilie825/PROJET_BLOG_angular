import { Component, OnInit } from '@angular/core';
import { AfficheCrudService } from '../services/affiche-crud.service';
import { CrudService } from '../services/crud.service';
import { Post } from '../model/post';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../author';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  
  posts: Post[] = [];

  id: number = 1;
  post_title: string = '';
  author_id: number = 0;
  image_url: string = '';
  post_resume: string = '';
  content: string = '';
  postsList: Post[] = this.posts;
  list:Author[]=[]
  
  constructor(private httpClient:HttpClient) { }
  public initForm(){
    this.post_title='';
    this.post_resume='';
    this.image_url='';
    this.content='';
  }
  ngOnInit(): void {
    console.table(this.posts);
    
    this.getList().subscribe(data=>{
      this.list=data;
      console.table(this.list)
    })
  }
  
  //je recupere mes données
  public getList():Observable<any>{
    return this.httpClient.get('http://102304.bloggy.ecole-it.devigne.space/authors/') 
  }
  
  //fonction pour afficher les données
  /**
   * saveData
   */
  public saveData():void {
  
    let post= new Post(this.post_title,this.post_resume,this.image_url,this.content, this.author_id);
    console.log(post);
    this.httpClient.post<Post>('http://102304.bloggy.ecole-it.devigne.space/posts/',JSON.stringify(post)).subscribe(data=>{
      console.log(data);
    })
    console.log('enregistré avec SUCCES');
    this.initForm();
  }
  
  
  updatePost(){
  
  }
  
  deletePost() {
     this.httpClient.delete<any>('http://102304.bloggy.ecole-it.devigne.space/posts/'+this.id)
      .subscribe 
    }
   
  deleteApost(){

  }
  
}
  