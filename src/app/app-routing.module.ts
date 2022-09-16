import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PostDetailedComponent } from './components/post-detailed/post-detailed.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: MainComponent, canActivate: [AuthGuardService] },
  { path: "post/:id", component: PostDetailedComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent },
  { path: '**', redirectTo: "/home", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
