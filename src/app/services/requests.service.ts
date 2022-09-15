import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment, Post, PostDB } from '../models/Post';
import { Observable } from 'rxjs';
import { env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  createPost(post: Post) {
    return this.http.post(`${env.ALPHA_URL}post`, post);
  }

  addComment(comment: Comment) {
    return this.http.post(`${env.ALPHA_URL}post/addComment`, comment)
  }

  bringAllPosts(): Observable<Array<PostDB>> {
    return this.http.get<Array<PostDB>>(`${env.BETA_URL}posts`);
  }

  bringPostById(postId: string): Observable<PostDB> {
    return this.http.get<PostDB>(`${env.BETA_URL}post/${postId}`);
  }
}
