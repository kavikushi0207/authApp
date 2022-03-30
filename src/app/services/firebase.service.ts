import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //set initial condition
  isLoggedIn = false;
  constructor(public firebaseAuth:AngularFireAuth) { }

  //log in method
  async login(email:string,password:string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
      .then(res=>{
        this.isLoggedIn=true
        localStorage.setItem('user',JSON.stringify(res.user))
      })
  }
  //sign up method
  async signup(email:string,password:string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(res=>{
        this.isLoggedIn=true
        localStorage.setItem('user',JSON.stringify(res.user))
      })
  }
  //log out method
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
