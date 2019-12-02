import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  showLoader: boolean; 
  constructor(private appConfigService: AppConfigService) { }

  ngOnInit() {
  }

  signOut() {
    console.log('Sign out!')
  }

}
