import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  openMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    this.openMenu = (this.openMenu) ? false : true;
  }

}
