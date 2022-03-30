import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FirebaseService} from "./services/firebase.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCCsPlAUPQEdbyWdL7SL7lw9JFT8jZ7r6E",
      authDomain: "authapp-94a50.firebaseapp.com",
      projectId: "authapp-94a50",
      storageBucket: "authapp-94a50.appspot.com",
      messagingSenderId: "508195568679",
      appId: "1:508195568679:web:4303698764cb13c2af6202"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
