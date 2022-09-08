import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDB } from 'src/app/models/Post';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.scss']
})
export class PostDetailedComponent implements OnInit {

  post?: PostDB;

  constructor(
    private route: ActivatedRoute,
    private requests: RequestsService 
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id =  this.route.snapshot.paramMap.get("id");
    if(id) this.requests.bringPostById(id).subscribe(res => this.post = res);
  }

}
