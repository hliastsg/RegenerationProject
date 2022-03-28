import { HttpParams } from '@angular/common/http';
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

  params = new HttpParams()
  .set('key', 'dac4d24e2f2a4bd9b158a06fd7645c15');

  constructor(private service: GameService) {
   }

  ngOnInit(): void {
     // this.data =this.service.get();
     this.requestGames();
    }

  requestGames() {
    console.log(this.params);

    this.service.get(this.params).subscribe({
      next: data => {
        this.response = data
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });


  }

}
