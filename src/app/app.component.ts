import { Component, OnInit } from '@angular/core';
import { AppConfigService, AppConfigSettings  } from './services/app-config.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'carsharing';
  constructor(private appConfigService: AppConfigService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    
    this.addSvgIcon('facebook');
    this.addSvgIcon('instagram');
    this.addSvgIcon('snapchat');
    this.addSvgIcon('whatsapp');


    const config: AppConfigSettings = {
      socialIcons: [
        { name: 'facebook', alt: 'Facebook', url: 'https://facebook.com/' },
        { name: 'instagram', alt: 'Instagram', url: 'https://facebook.com/' },
        { name: 'snapchat', alt: 'Snapchat', url: 'https://facebook.com/' },
        { name: 'whatsapp', alt: 'WhatsApp', url: 'https://facebook.com/' } 
      ],
      showUserControl: true
    }
    
    appConfigService.configure(config);
  }

  addSvgIcon(iconName) {
    // this.appConfigService.getSvgFile(`../assets/svg/${iconName}.svg`).subscribe(element => {
    //   console.log(element);
      this.matIconRegistry.addSvgIcon(
        iconName, 
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/svg/${iconName}.svg`))
    // });
  }
  
}
