import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  token?: string;
  @ViewChild("createBtn") createBtn !: ElementRef<HTMLButtonElement>;
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
    this.loadingCreatePostForm();

    this.requests.createPost({title: this.newTitle, author: this.newAuthor}, this.token)
    .subscribe({
      next: () => this.resetCreatePostForm(),
      error: () => this.deniedCreatePostForm()
    });
  }

  deniedCreatePostForm () {
    const btnCreate = this.createBtn.nativeElement;
    btnCreate.innerText = "DENIED";
    btnCreate.classList.add("invalid");
    btnCreate.parentElement?.classList.add("invalid");
    this.newAuthor = "";
    this.newTitle = "";
    
    this.inputs.forEach((input, i) => {
      const inputEl = input.nativeElement;

      if(i === 0) inputEl.placeholder = "NO";
      else inputEl.placeholder = "ACCESS";

      inputEl.disabled = true
      inputEl.classList.add("invalid");
    });
    
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

    if(!this.token) this.deniedCreatePostForm();
  }    

  checkInputs() {
    if(!this.newAuthor || !this.newTitle) {
      this.createBtn.nativeElement.disabled = true;
    } else {
      this.createBtn.nativeElement.disabled = false;
    }
  }

}
