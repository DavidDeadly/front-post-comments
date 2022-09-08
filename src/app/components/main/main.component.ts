import { Component, OnInit } from '@angular/core';
import { PostDB } from 'src/app/models/Post';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  posts?: PostDB[];

  constructor(private requests: RequestsService) { }

  ngOnInit(): void {
    this.requests.bringAllPosts()
    .subscribe(res => this.posts = res);
  }

}
