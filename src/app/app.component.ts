import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  openMenu: boolean = false;

  changeStatus() {

    this.openMenu = (this.openMenu) ? false : true;
  }
}
