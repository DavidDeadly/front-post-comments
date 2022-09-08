import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  conectToWebSocket<T>(spaceStr: string | null): WebSocketSubject<T> | undefined{
    if(!spaceStr) return;
    return webSocket(`ws://127.0.0.1:8082/retrieve/${spaceStr}`);
  }
}
