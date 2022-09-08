import { Component, Input, OnInit } from '@angular/core';
import { PostDB } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post ?: PostDB;

  constructor() { }

  ngOnInit(): void {
  }

}
