import { Component, OnInit } from '@angular/core';
import { JogosService } from '../jogos.service';

import { Jogo } from '../models/Jogos.model';

@Component({
  selector: 'app-mural-jogos',
  templateUrl: './mural-jogos.component.html',
  styleUrls: ['./mural-jogos.component.css']
})
export class MuralJogosComponent implements OnInit {


  public jogos: Jogo[] = [];


  constructor(private _jogoService: JogosService) { }

  ngOnInit(): void {
    this.listarJogos();
  }

  listarJogos() {
    this._jogoService.getJogo().
      subscribe(
        retornaJogo => {
          this.jogos = retornaJogo.map(
            item => {
              return new Jogo(
                item.id,
                item.nomeJogo,
                item.dataLancamento,
                item.plataformas,
                item.generos,
                item.deseenvolvedor
              );
            }
          )
        }
      )
  }
}
