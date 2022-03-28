import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameDetailsService {

  constructor(private http: HttpClient) {

  }

  url: string = 'https://api.rawg.io/api/games/' ;
  params = new HttpParams()
  .set('key', 'dac4d24e2f2a4bd9b158a06fd7645c15');

  get(id : string){
    return this.http.get((this.url+id), {params: this.params})
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong: ${error}`))
      );
  }



}
