import { Injectable } from '@angular/core';
import * as  firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private fireauth : AngularFireAuth, private router :Router) { }
   //connexion
  login(email:string, password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> {
       localStorage.setItem('token','true');
       this.router.navigate(['/administration']);
    },error =>{
        alert(error.message);
        this.router.navigate(['/inscript'])
    })

  }

  //Inscription
  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=> {
       alert('Enregistrement reussi avec succès')
       this.router.navigate(['/administration']);
    },error =>{
        alert(error.message);
        this.router.navigate(['/inscript'])
    })

  }
  //
  logout(){
    this.fireauth.signOut().then( ()=>{
        localStorage.removeItem('token');
        this.router.navigate(['/administration']);
    },error =>{
        alert(error.message);
        
    })

  }

}  
