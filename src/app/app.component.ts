import { Component } from '@angular/core';
import { listItems } from '../Services/static-values'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectTask';
  sidenavWidth = '200px';
  mainPanelWidth = '';
  isSidenavOpen: boolean = true;
  menuItem: any[] = [];
  checkWidth: boolean = true;


  constructor() {
    this.getStaticData();
  }


  // -----Get Static data from Static inteface-----
  getStaticData() {
    listItems.forEach((res) => {
      this.menuItem.push(res);
    });

  }

  openNav() {
    this.sidenavWidth = '200px';
    this.isSidenavOpen = true;
    this.checkWidth = true;
  }

  closeNav() {
    this.sidenavWidth = '80px';
    this.isSidenavOpen = false;
    this.checkWidth = false;
  }


}

