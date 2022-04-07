import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

 //data:any;
  response: any[] = [];
  page:any;
  msg: string = '';
  i:number = 0;

  constructor(private service :GameService) {
   }

  ngOnInit(): void {
     // this.data =this.service.get();
     this.requestGames();
    }

  requestGames() {

    if(this.i<10) {
      this.i++;

    this.service.get(this.i).subscribe({
      next: data => {
        this.page=data
        this.response.push(data)
        this.requestGames()
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });

  }
  }

}
