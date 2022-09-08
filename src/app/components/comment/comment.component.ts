import { Component, Input, OnInit } from '@angular/core';
import { CommentDB } from 'src/app/models/Post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment?: CommentDB;

  constructor() { }

  ngOnInit(): void {
  }

}
