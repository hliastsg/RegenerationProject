import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  url: string = 'https://api.rawg.io/api/games';
  // params = new HttpParams()
  // .set('key', 'dac4d24e2f2a4bd9b158a06fd7645c15');

  get(params: any){
    console.log(params);

    return this.http.get(this.url, {params: params})
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong: ${error}`))
      );
  }
}
