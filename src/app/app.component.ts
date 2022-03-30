import { Component } from '@angular/core';
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authApp';
  isSignedIn = false
  constructor(public firebaseService : FirebaseService) {}
  ngOnInit(){
    if(localStorage.getItem('user') !== null)
      this.isSignedIn=true
    else
      this.isSignedIn=false
  }
  async onSignUp(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true;
  }

  async onSignIn(email:string,password:string){
    await this.firebaseService.login(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true;
  }
  handleLogout(){
    this.isSignedIn=false
  }
}
