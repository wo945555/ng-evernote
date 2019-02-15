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
  activeItem: String;
  constructor(private navItemsService: NavItemsService ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.navItemsService.getNavItems()
      .subscribe(items => this.items = items);
  }
  onSelect(item: Nav): void {
    this.activeItem = item.text;
  }
}
