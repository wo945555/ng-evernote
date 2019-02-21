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
  activeTrangle: String[];
  collapseItems: String[] = ['Shortcuts', 'Notebooks'];
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
  isTriangleShow(text: String): Boolean {
    return this.collapseItems.some(v=>v === text);
  }
  onTriangleClick(item: Nav): void {
    //该行展开/关闭
    //class旋转
    //this.activeTrangle.map
  }
}
