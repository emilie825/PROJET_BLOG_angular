import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
  email:string='';
  password: string='';
  

   constructor(private auth: AuthentificationService) { }
   
   ngOnInit(): void {
     
   }
   
   login(){

    if (this.email=='') {
      alert('Veuillez entrer votre email')
      return;
    }
    if (this.password=='') {
      alert('Veuillez entrer votre password')
      return;
    }

    this.auth.login(this.email, this.password);
    this.email='';
    this.password='';

   }
   
  

  
}
