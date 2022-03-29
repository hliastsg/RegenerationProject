import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailsService } from 'src/app/services/game-details.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})

export class GameDetailsComponent implements OnInit {

  response: any;
  msg: string = '';
  id: any;


  constructor(  private service :GameDetailsService , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
    this.id = params['id'];

    this.requestGameDetails();
      });
  }

  requestGameDetails() {
    this.service.get(this.id).subscribe({
      next: data => {
        this.response = data
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
    console.log(this.response);

  }







}
