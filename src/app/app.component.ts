import { Component, OnInit } from '@angular/core';
import { RequestsService } from './services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newTitle: string = '';
  newAuthor: string  = '';

  constructor(private requests: RequestsService) {}

  ngOnInit(): void {}

  createPost() {
    this.requests.createPost({title: this.newTitle, author: this.newAuthor})
    .subscribe(res => {
      console.log(res);
      this.newTitle = '';
      this.newAuthor = '';
    });
  }
}
