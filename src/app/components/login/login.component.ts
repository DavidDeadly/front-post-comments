import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logInWithGoogle() {
    this.authService.logInWithGoogle()
    .then(res => {
      this.authService.state.next({
        loggedIn: true,
        authUser: res.user
      })
      this.router.navigateByUrl("/");
    });
  }
}
