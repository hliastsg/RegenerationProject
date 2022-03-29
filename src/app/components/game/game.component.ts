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

  params = new HttpParams()
  .set('key', 'dac4d24e2f2a4bd9b158a06fd7645c15')
  .set('id', '')

  constructor(private service: GameService) {}

  ngOnInit(): void {

  }

  gameOnClick(id: any) {

    console.log(id);
    this.params.set('id', id);
    console.log(this.params);

    this.service.get().subscribe({
      next: data => {
        this.response = data
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
    console.log(this.response);

  }

}
