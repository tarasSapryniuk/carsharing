import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService, private navService: NavService) { }

  ngOnInit() {
  }

}
