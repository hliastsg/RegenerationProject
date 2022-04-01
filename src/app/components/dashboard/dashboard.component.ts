import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { GameService } from 'src/app/services/game.service';
import { IndieService } from 'src/app/services/indie.service';
import { NewReleaseService } from 'src/app/services/new-release.service';
import { PopularService } from 'src/app/services/popular.service';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  response: any;
  msg: string = '';
  home: boolean = false;
  release: boolean = false; 
  popular: boolean = false;
  action: boolean = false;
  indie: boolean = false;
  sports: boolean = false;

  constructor(private release_service :NewReleaseService, private game_service :GameService, private action_service :ActionService,
    private indie_service :IndieService, private sports_service :SportsService, private popular_service :PopularService) { }

  ngOnInit(): void {
    this.requestGames();
  }

  requestGames() {
    this.game_service.get().subscribe({
      next: data => {
        this.response = data,
        this.home = true,
        this.release = false, 
        this.popular = false,
        this.indie = false,
        this.action = false,
        this.sports = false
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
  }

  requestNewRelease() {
    this.release_service.get().subscribe({
      next: data => {
        this.response = data,
        this.home = false,
        this.release = true, 
        this.popular = false,
        this.indie = false,
        this.action = false,
        this.sports = false
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
  }

  requestAction() {
    this.action_service.get().subscribe({
      next: data => {
        this.response = data,
        this.home = false,
        this.release = false, 
        this.popular = false,
        this.indie = false,
        this.action = true,
        this.sports = false
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
  }

  requestIndie() {
    this.indie_service.get().subscribe({
      next: data => {
        this.response = data,
        this.home = false,
        this.release = false, 
        this.popular = false,
        this.indie = true,
        this.action = false,
        this.sports = false
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
  }

  requestSports() {
    this.sports_service.get().subscribe({
      next: data => {
        this.response = data,
        this.home = false,
        this.release = false, 
        this.popular = false,
        this.indie = false,
        this.action = false,
        this.sports = true
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
  }

  requestPopular() {
    this.popular_service.get().subscribe({
      next: data => {
        this.response = data,
        this.home = false,
        this.release = false, 
        this.popular = true,
        this.indie = false,
        this.action = false,
        this.sports = false
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
  }

}
