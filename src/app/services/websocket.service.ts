import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  conectToWebSocket<T>(spaceStr: string | null): WebSocketSubject<T> | undefined{
    if(!spaceStr) return;
    return webSocket(`${env.GAMA_URL}retrieve/${spaceStr}`);
  }
}
