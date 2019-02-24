import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesUrl = 'api/notes';
  constructor( private http: HttpClient ){
    // getNoteBooks(): Observabel<string[]> {
    //   return this.http.get<string[]>(this.notesUrl)
    //     .pipe(
    //       catchError(this.handleError<string[]>('getNoteBooks', []));
    //     )
    // }
  }
  private handleError<T> (operators = 'operators', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
