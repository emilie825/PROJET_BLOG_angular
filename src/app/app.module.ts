import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AffichageComponent } from './affichage/affichage.component';
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule,Routes} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostViewComponent } from './post-view/post-view.component';
import { PostEditComponent } from './post-edit/post-edit.component';

import {HttpClientModule} from '@angular/common/http';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {AuthentificationService} from './services/authentification.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomepageComponent } from './homepage/homepage.component';
import { PresentationpostComponent } from './presentationpost/presentationpost.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component' 

const appRoutes:Routes =[

    {path:'', redirectTo:'/acceuil', pathMatch:'full'},
    {path:'homepage',component:HomepageComponent},
    {path:'administration', component:AffichageComponent},
    {path:'create', component:NewPostComponent},
    {path:'acceuil', component:AcceuilComponent},
    {path:'post/:ID ', component:PresentationpostComponent},
    {path:'put/post/:ID ', component:PostEditComponent},
    {path:'connexion', component:ConnexionComponent},
    {path:'inscription', component:InscriptionComponent},
    {path:'inscription', component:InscriptionComponent},
    {path:'not-found',component:NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    NewPostComponent,
    PostViewComponent,
    PostEditComponent,
    HomepageComponent,
    ConnexionComponent,
     InscriptionComponent,
     HomepageComponent,
     PresentationpostComponent,
     NotFoundComponent
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
    
  ],
  providers: [
    AuthentificationService

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
