import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title: string = 'All rights reserved';
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}