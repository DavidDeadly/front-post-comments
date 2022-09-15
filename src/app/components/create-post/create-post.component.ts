import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export default class CreatePostComponent implements OnInit, AfterViewInit {
  newTitle: string = "";
  newAuthor: string  = "";
  textCreateBtn: string = "Create";
  @ViewChild("createBtn") createBtn !: ElementRef<HTMLButtonElement>;
  @ViewChildren("inputs") inputs !: Array<ElementRef<HTMLInputElement>>

  constructor(private requests: RequestsService) {}

  ngOnInit(): void {
  }

  createPost() {
    this.loadingCreatePostForm();

    this.requests.createPost({title: this.newTitle, author: this.newAuthor})
    .subscribe(() => this.resetCreatePostForm());
  }

  loadingCreatePostForm() {
    this.textCreateBtn = "..."
    this.createBtn.nativeElement.disabled = true;
    this.inputs.forEach(input => input.nativeElement.disabled = true);
  }

  resetCreatePostForm() {
    this.newTitle = "";
    this.newAuthor = "";
    this.textCreateBtn = "Create"
    this.inputs.forEach(input => input.nativeElement.disabled = false);
  } 

   ngAfterViewInit() {
    this.createBtn.nativeElement.disabled = true;
  }

  checkInputs() {
    if(!this.newAuthor || !this.newTitle) {
      this.createBtn.nativeElement.disabled = true;
    } else {
      this.createBtn.nativeElement.disabled = false;
    }
  }

}
