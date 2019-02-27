import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = {
      'First Notebook': [
        {
          title: 'Welcome',
          content: '', //标签以及富文本json
        },
      ],
    };
    const  noteBooks = Object.keys(notes);
    return {notes, noteBooks};
  }
}