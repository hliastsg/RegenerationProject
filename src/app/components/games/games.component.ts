import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

 //data:any;
  response: any;
  msg: string = '';

  constructor(private service :GameService) {
   }

  ngOnInit(): void {
     // this.data =this.service.get();
     this.requestGames();
    }

  requestGames() {
    this.service.get().subscribe({
      next: data => {
        this.response = data
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
  }

}
