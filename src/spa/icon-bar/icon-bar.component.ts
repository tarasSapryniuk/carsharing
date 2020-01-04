import { Component, OnInit } from '@angular/core';
import { SpaConfigService } from '../services/spa-config.service';
import { UserApi } from '../users/users-api';

@Component({
  selector: 'spa-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  showLoader: boolean; 
  constructor(private appConfigService: SpaConfigService, private userApi: UserApi) { }

  ngOnInit() {
    this.showLoader = false;
  }

  signOut() {
    this.showLoader = true;
    setTimeout(() => {this.userApi.signOut(); }, 2000)
    console.log('Sign out!')
  }

}
