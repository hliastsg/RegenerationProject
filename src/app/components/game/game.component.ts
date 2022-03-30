import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  @Input()

  game: any;
  response: any;
  msg: any;


  constructor() {}

  ngOnInit(): void {

  }
}
