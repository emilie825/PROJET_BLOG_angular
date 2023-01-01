import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


    constructor(private afs : AngularFirestore, private fireStorage : AngularFirestore) { }
  
  
    // add student
    addStudent(post : Post) {
     
      return this.afs.collection('/post').add(post);
    }
  
    // get all students
    getAllStudents() {
      return this.afs.collection('/Post').snapshotChanges();
    }
  
    // delete student
    deleteStudent(post : Post) {
       this.afs.doc('/Post/'+post.id).delete();
    }
  
    // update student
    updateStudent(post : Post) {
      this.deleteStudent(post);
      this.addStudent(post);
    }
}
