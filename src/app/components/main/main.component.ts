import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { PostDB } from 'src/app/models/Post';
import { RequestsService } from 'src/app/services/requests.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  socketManager?: WebSocketSubject<PostDB>;
  posts: PostDB[] = [];

  constructor(
    private requests: RequestsService,
    private socket: WebsocketService
  ) { }


  ngOnDestroy(): void {
    this.socketManager?.complete();
  }

  ngOnInit(): void {
    this.requests.bringAllPosts()
    .subscribe(res => this.posts = res.reverse());

    this.connectToMainSpace();
  }

  connectToMainSpace() {
    this.socketManager = this.socket.conectToWebSocket<PostDB>("mainspace")
    this.socketManager
      ?.subscribe(msg => {
        this.posts?.unshift(msg);
      });
  }

}
