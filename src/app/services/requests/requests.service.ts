import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment, Post, PostDB } from '../../models/Post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  baseHearders = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  logIn(user: any) {
    return this.http.post<any>(`${environment.ALPHA_URL}auth/login`, user, {
      headers: this.baseHearders
    })
  }

  createPost(post: Post, token?: string) {

    return this.http.post(`${environment.ALPHA_URL}post`, post, {
      headers: this.baseHearders.append("Authorization", `Bearer ${token}`)
    });
  }

  addComment(comment: Comment, token?: string) {
    return this.http.post(`${environment.ALPHA_URL}post/addComment`, comment, {
      headers: this.baseHearders.append("Authorization", `Bearer ${token}`)
    })
  }

  bringAllPosts(): Observable<Array<PostDB>> {
    return this.http.get<Array<PostDB>>(`${environment.BETA_URL}posts`);
  }

  bringPostById(postId: string): Observable<PostDB> {
    return this.http.get<PostDB>(`${environment.BETA_URL}post/${postId}`);
  }
}
