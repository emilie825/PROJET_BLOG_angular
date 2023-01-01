import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon_Projet_Angular';
  
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCr7OPtSrrvDsR2sn8C__oU7E3nZaPkmos",
      authDomain: "monprojetangular-271f2.firebaseapp.com",
      projectId: "monprojetangular-271f2",
      storageBucket: "monprojetangular-271f2.appspot.com",
      messagingSenderId: "410784589122",
      appId: "1:410784589122:web:874abf81d60226a3fd14db",
      measurementId: "G-YK0TE30GES"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);  
  }
}

