import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  newTitle: string = '';
  newAuthor: string  = '';

  constructor(private requests: RequestsService) {}

  ngOnInit(): void {}

  createPost() {
    this.requests.createPost({title: this.newTitle, author: this.newAuthor})
    .subscribe(() => {
      this.newTitle = '';
      this.newAuthor = '';
    });
  }

}
