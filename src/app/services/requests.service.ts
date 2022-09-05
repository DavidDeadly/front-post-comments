import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, PostDB } from '../models/Post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  createPost(post: Post): Observable<PostDB> {
    return this.http.post<PostDB>("http://127.0.0.1:8080/post", post);
  }
}
