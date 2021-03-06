import { Injectable } from '@angular/core';
import { Nav } from '../../interfaces/nav'
import { Observable, of } from 'rxjs';

const STAR_URL: string = '/assets/img/star.png';
const NOTE_URL: string = '/assets/img/note.png';
const NOTEBOOK_URL: string = '/assets/img/noteBook.png';
const COOPERATION_URL: string = '/assets/img/cooperation.png';
const TAG_URL: string = '/assets/img/tag.png';
const TRASH_URL: string = '/assets/img/trash.png';
const NAV_ITEMS: Nav[] = [{
  icon: STAR_URL, text: 'Shortcuts'
},{
  icon: NOTE_URL, text: 'All Notes'
},{
  icon: NOTEBOOK_URL, text: 'Notebooks'
},{
  icon: COOPERATION_URL, text: 'Shared with Me'
},{
  icon: TAG_URL, text: 'Tags'
},{
  icon: TRASH_URL, text: 'Trash'
}]

@Injectable({
  providedIn: 'root'
})
export class NavItemsService {

  constructor() { }
  getNavItems(): Observable<Nav[]> {
    return of(NAV_ITEMS)
  }
  setProperty(prop: string, val: any, option?: (string |string[])): Observable<Nav[]> {
    return of(NAV_ITEMS.map(nav => {
      let shouldSet = true;
      if(option){
        switch(Object.prototype.toString.call(option).replace(/\[object\s|\]/g,'')){
          case 'Array':
            shouldSet = (<string[]>option).some(opt => opt === nav.text);
            break;
          case 'String':
            shouldSet = (option ===  nav.text)? true: false;
            break;
        }
      }
      if(shouldSet){
        Object.defineProperty(nav,prop,{value: val, writable: true});
      } 
      return nav
    }))
  }
}
