import { Injectable } from '@angular/core';

export interface MenuItem {
   text: string,
   icon: string,
   route: string,
   submenu: Array<MenuItem>
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  items: Array<MenuItem>
  isVertical = true;
  showVerticalMenu = false;
  toggleMenu(): void {
    this.isVertical = true;
    this.showVerticalMenu = !this.showVerticalMenu;
  }
  constructor() { }
}
