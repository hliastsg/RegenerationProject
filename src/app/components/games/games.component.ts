import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

 //data:any;
  response:any;

  constructor(private service :GameService) {
   }

  ngOnInit(): void {
     // this.data =this.service.get();
     this.requestGames();
    }

  requestGames() {
    this.service.get().subscribe(
      data => {
        this.response = data;

      },
      error => {},
      () => {}
      );
  }
}
