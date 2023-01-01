import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class AfficheCrudService {
  constructor(private afs : AngularFirestore, private fireStorage : AngularFirestore) { }


  // add post
  addPost(post : Post) {
    
    return this.afs.collection('/Posts').add(post);
  }

  // get all posts
  getAllPosts() {
    return this.afs.collection('/Posts').snapshotChanges();
  }

  // delete student
  deletePost(post : Post) {
     this.afs.doc('/Posts/'+post.id).delete();
  }

  // update student
  updatePost(post : Post) {
    this.deletePost(post);
    this.addPost(post);
  }
    


  
}
