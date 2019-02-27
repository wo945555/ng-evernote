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
  activeItem: string;
  collapseItems: string[] = ['Shortcuts', 'Notebooks'];
  constructor(private navItemsService: NavItemsService ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.navItemsService.setProperty('active', false, this.collapseItems)
      .subscribe(items => this.items = items);
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
