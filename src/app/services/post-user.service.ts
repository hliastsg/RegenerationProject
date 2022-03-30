import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {

  constructor(private http: HttpClient) { }

  urlFakePost = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'crossDomain': 'true'
    })
  }

  postUser(data: any) {
    return this.http.post(this.urlFakePost, data, this.httpOptions)
    .pipe(
      retry(1),
      catchError(error => throwError(() => `Something went wrong ${error}`))
    );
  }
}
