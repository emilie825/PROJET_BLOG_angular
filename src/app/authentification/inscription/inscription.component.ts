import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  email:string='';
  password: string='';

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
  }

  register(){
    
    if (this.email=='') {
      alert('Completer votre email')
      return;
    };
    if ( this.password=='') {
      alert('Completer le mot de passe')
      return;
    }
    
    this.auth.register(this.email, this.password);
    this.email='';
    this.password='';
  
    

    

    

   }

}
