import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { PostDB } from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  socketManager?: WebSocketSubject<PostDB>;
  posts: PostDB[] = [];

  constructor(
    private requests: RequestsService,
    private socket: WebsocketService,
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
      ?.subscribe({
        next: msg => {
          this.posts?.unshift(msg);
        },
        error: () => this.connectToMainSpace(),
      });
  }

}
