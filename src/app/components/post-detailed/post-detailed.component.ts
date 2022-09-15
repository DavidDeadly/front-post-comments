import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { CommentDB, PostDB } from 'src/app/models/Post';
import { RequestsService } from 'src/app/services/requests.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.scss']
})
export class PostDetailedComponent implements OnInit, OnDestroy {
  socketManager?: WebSocketSubject<CommentDB>;
  post?: PostDB;

  constructor(
    private route: ActivatedRoute,
    private requests: RequestsService,
    private socket: WebsocketService
  ) { }

  ngOnDestroy(): void {
    this.socketManager?.complete();
  }

  ngOnInit(): void {
    this.getPost();

    this.connectToPostSpace();
  }

  getPost() {
    const id =  this.route.snapshot.paramMap.get("id");
    if(id) this.requests.bringPostById(id).subscribe(res => this.post = res);
  }

  connectToPostSpace() {
    const id =  this.route.snapshot.paramMap.get("id");
    this.socketManager = this.socket.conectToWebSocket<CommentDB>(id);
    this.socketManager
    ?.subscribe(msg => {
      this.post?.comments.push(msg);
    })
  }

}
