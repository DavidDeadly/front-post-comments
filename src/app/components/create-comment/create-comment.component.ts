import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  token?: string;
  @ViewChild("commentBtn") createBtn !: ElementRef<HTMLButtonElement>;
  @ViewChildren("inputs") inputs !: Array<ElementRef<HTMLInputElement>>

  constructor(
    private requests: RequestsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.state
    .subscribe(stateUpdate => this.token = stateUpdate.token);
  }

  createPost() {
    this.loadingAddCommentForm();

    if(this.id) {
      this.requests.addComment({postID: this.id, content: this.content, author: this.author}, this.token)
      .subscribe({
        next: () => this.resetAddCommentForm(),
        error: () => this.deniedAddCommentForm()
      });
    }
  }

  deniedAddCommentForm = () => {
    const btnCreate = this.createBtn.nativeElement;
    btnCreate.innerText = "DENIED";
    btnCreate.classList.add("invalid");
    btnCreate.parentElement?.classList.add("invalid");
    this.content = "";
    this.author = "";

    this.inputs.forEach((input, i) => {
      const inputEl = input.nativeElement;

      if(i === 0) inputEl.placeholder = "NO";
      else inputEl.placeholder = "ACCESS";

      inputEl.disabled = true
      inputEl.classList.add("invalid");
    });
    
  }

  loadingAddCommentForm() {
    this.textCreateBtn = "..."
    this.createBtn.nativeElement.disabled = true;
    this.inputs.forEach(input => input.nativeElement.disabled = true);
  }

  resetAddCommentForm() {
    this.content = "";
    this.author = "";
    this.textCreateBtn = "Comment"
    this.inputs.forEach(input => input.nativeElement.disabled = false);
  } 

   ngAfterViewInit() {
    this.createBtn.nativeElement.disabled = true;

    if(!this.token) this.deniedAddCommentForm();
  }

  checkInputs() {
    if(!this.author || !this.content) {
      this.createBtn.nativeElement.disabled = true;
    } else {
      this.createBtn.nativeElement.disabled = false;
    }
  }


}
