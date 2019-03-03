import { Component, OnInit } from '@angular/core';
import { Nav } from '../../interfaces/nav'
import { NavItemsService } from '../../services/nav-items/nav-items.service'
import { NotesService } from '../../services/notes/notes.service'

  

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  items: Nav[];
  noteBooks: string[];
  activeItem: string;
  collapseItems: string[] = ['Shortcuts', 'Notebooks'];
  constructor(
    private navItemsService: NavItemsService,
    private notesService: NotesService
     ) { }

  ngOnInit() {
    this.getItems();
    this.getNoteBooks();
  }
  getItems(): void {
    this.navItemsService.setProperty('active', false, this.collapseItems)
      .subscribe(items => this.items = items);
  }
  getNoteBooks(): void { //考虑该数据之后放到store里去
    this.notesService.getNoteBooks()
    .subscribe(noteBooks => this.noteBooks = noteBooks)
  }
  onSelect(item: Nav): void {
    this.activeItem = item.text;
  }
  isTriangleShow(text: string): Boolean {
    return this.collapseItems.some(v=>v === text);
  }
  onTriangleClick(text: string): void {
    console.log(this.items)
    //该行展开/关闭
    //class旋转
    this.items.forEach(item=>{
      if(item.text === text){
        item.active = !item.active;
      }
    })
  }
}
