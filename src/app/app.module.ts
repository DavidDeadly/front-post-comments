import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import CreatePostComponent from './components/create-post/create-post.component';
import { MainComponent } from './components/main/main.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailedComponent } from './components/post-detailed/post-detailed.component';
import { CommentComponent } from './components/comment/comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    MainComponent,
    PostComponent,
    PostDetailedComponent,
    CommentComponent,
    CreateCommentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
