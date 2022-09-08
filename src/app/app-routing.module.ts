import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MainComponent } from './components/main/main.component';
import { PostDetailedComponent } from './components/post-detailed/post-detailed.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: MainComponent },
  { path: "create", component: CreatePostComponent },
  { path: "post/:id", component: PostDetailedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
