import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuService, MenuItem } from 'src/app/services/menu.service';


@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu: Array<MenuItem>;
  @ViewChild('childMenu', {static: true}) public childMenu;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
