import { Component, OnInit } from '@angular/core';
import { Nav } from '../../interfaces/nav'
import { NavItemsService } from '../../services/nav-items/nav-items.service'


  

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  items: Nav[];

  constructor(private navItemsService: NavItemsService ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.navItemsService.getNavItems()
      .subscribe(items => this.items = items);
  }
}
