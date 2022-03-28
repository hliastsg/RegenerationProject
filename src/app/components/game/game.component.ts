import { Component, Input, OnInit } from '@angular/core';
import { GameDetailsService } from 'src/app/services/game-details.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  @Input() game: any;



  constructor() { }

  ngOnInit(): void {
  }


}
