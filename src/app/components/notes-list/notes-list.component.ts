import { Component, OnInit } from '@angular/core';
import { Nav } from '../../interfaces/nav'
import { NavItemsService } from '../../services/nav-items/nav-items.service'


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
