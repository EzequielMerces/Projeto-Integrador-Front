import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Jogo } from './models/Jogos.model';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private url = "http://localhost:3000/jogos";

  constructor(private _htttpClient: HttpClient) {}

  getJogo():Observable<Jogo[]>{
    return this._htttpClient.get<Jogo[]>(this.url);
  }
}
