import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { RequestsService } from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

  content: string = "";
  author: string  = "";
  @Input() id?: string;
  textCreateBtn: string = "Comment";
  @ViewChild("commentBtn") createBtn !: ElementRef<HTMLButtonElement>;
  @ViewChildren("inputs") inputs !: Array<ElementRef<HTMLInputElement>>

  constructor(private requests: RequestsService) {}

  ngOnInit(): void {
    
  }

  createPost() {
    this.loadingCreatePostForm();
    if(this.id) {
      this.requests.addComment({postID: this.id, content: this.content, author: this.author})
      .subscribe(() => this.resetCreatePostForm());
    }
  }

  loadingCreatePostForm() {
    this.textCreateBtn = "..."
    this.createBtn.nativeElement.disabled = true;
    this.inputs.forEach(input => input.nativeElement.disabled = true);
  }

  resetCreatePostForm() {
    this.content = "";
    this.author = "";
    this.textCreateBtn = "Comment"
    this.inputs.forEach(input => input.nativeElement.disabled = false);
  } 

   ngAfterViewInit() {
    this.createBtn.nativeElement.disabled = true;
  }

  checkInputs() {
    if(!this.author || !this.content) {
      this.createBtn.nativeElement.disabled = true;
    } else {
      this.createBtn.nativeElement.disabled = false;
    }
  }


}
