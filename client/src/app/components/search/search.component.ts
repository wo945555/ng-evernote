import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  currentColor: string = '#666';
  constructor() { }

  ngOnInit() {
  }
  changeSvgColor(event: any) {
    if(event.target.value){
      this.currentColor = '#00a82d';
    }else{
      this.currentColor = '#666';
    }
    
  }
}
