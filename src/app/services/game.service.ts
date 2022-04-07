import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  url: string = 'https://api.rawg.io/api/games?key=dac4d24e2f2a4bd9b158a06fd7645c15';
  // params = new HttpParams()
  // .set('key', 'dac4d24e2f2a4bd9b158a06fd7645c15');

  get(i:number){
    return this.http.get(this.url + '&page=' + i)
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong: ${error}`))
      );
  }
}
