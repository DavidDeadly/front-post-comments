import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface InitialStateI {
  loggedIn: boolean,
  authUser: any,
  token?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private initialState: InitialStateI = {
    loggedIn: false,
    authUser: {},
    token: undefined
  }

  state = new BehaviorSubject(this.initialState);

  constructor(
    private auth: Auth,
    private router: Router
  ) { } 

  isLoggedIn(cb: Function) {
    this.state
    .subscribe(state => {

      if(!state.loggedIn) {
        this.router.navigateByUrl("/login");
      } else cb();
      
    })
  }

  logInWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }
}
