import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, onErrorResumeNext } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { environment } from 'src/environments/environment';


interface  AfterLoginI  {
  token: string, user: any 
}

interface LoginI {
  user: any, 
  afterLogIn: (res: AfterLoginI ) => void
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private requests: RequestsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logInWithGoogle() {
    this.authService.logInWithGoogle()
    .then(res =>  {

      this.logIn({
        user: res.user,
        afterLogIn: this.logInToState
      })

    });
  }
  

  logInToState = ({ token, user }: AfterLoginI) => {

    this.authService.state.next({
      loggedIn: true,
      authUser: user,
      token
    })

    this.router.navigateByUrl("/");
    
  }

  logIn({ user, afterLogIn }: LoginI) {

    return this.requests.logIn({
          username: user.email,
          password: user.email,
          email: user.email,
        }).pipe(
          catchError(err => of(err))
        )
      .subscribe((res) =>  afterLogIn({ token: res.token, user }));
  }
}
