import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, PostDB } from '../models/Post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  createPost(post: Post) {
    return this.http.post("http://127.0.0.1:8080/post", post);
  }

  bringAllPosts(): Observable<Array<PostDB>> {
    return this.http.get<Array<PostDB>>("http://127.0.0.1:8081/posts");
  }

  bringPostById(postId: string): Observable<PostDB> {
    return this.http.get<PostDB>(`http://127.0.0.1:8081/post/${postId}`);
  }
}
