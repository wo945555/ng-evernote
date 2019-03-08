import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Note, NoteBook } from '../../interfaces/notes'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesUrl = 'api/notes/list_notes';
  private noteBooksUrl = 'api/notes/list_note_books';

  constructor( private http: HttpClient ){}

  

  getNoteBooks(): Observable<string[]> {
    console.log(this.noteBooksUrl)
    return this.http.get<string[]> (this.noteBooksUrl)
      .pipe(
        catchError(this.handleError<string[]>('getNoteBooks', []))
      );
  }
  private handleError<T> (operators = 'operators', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
