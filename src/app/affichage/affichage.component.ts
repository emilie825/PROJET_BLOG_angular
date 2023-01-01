import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from '../author';
import { Post } from '../model/post';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  public initForm(){
    this.post_title='';
    this.post_resume='';
    this.image_url='';
    this.content='';
  }
  postss: Post[] = [];
  image_url: string = '';
  

  lists:Author[]=[]

  

posts: any;
post:Post=new Post('','','','',0);
id: number = 1;
post_title: string = '';
autor: string = '';
image: string = '';
post_resume: string = '';
content: string = '';

constructor(private httpClient:HttpClient) { }

//je recupère mes données
ngOnInit(): void {
  console.table(this.posts);
  const path='http://102304.bloggy.ecole-it.devigne.space/posts/'
  this.httpClient.get(path).subscribe(data=>{
    this.posts=data;
    console.table(this.posts);
  })
}





updatePost(){

}

public deletePost():void {
  
  
  this.httpClient.delete<Post>('http://102304.bloggy.ecole-it.devigne.space/posts/').subscribe(data=>{
    console.log(data);
  })
  console.log('suppression avec SUCCES');
  this.initForm();
}


}






