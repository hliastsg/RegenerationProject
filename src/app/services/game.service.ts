import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get('https://api.rawg.io/api/games?key=dac4d24e2f2a4bd9b158a06fd7645c15')
    //return ['g','gg']
    //this.http.get([])
  }
}
