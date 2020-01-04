import { Component, OnInit } from "@angular/core";
import {
  SpaConfigService,
  SpaConfigSettings
} from "../spa/services/spa-config.service";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { of, from } from "rxjs";
import { map } from "rxjs/operators";
import { MenuService } from '../spa/services/menu.service';
import { AppMenuItems } from './app.menu'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "carsharing";
  constructor(
    private spaConfigService: SpaConfigService,
    private matIconRegistry: MatIconRegistry,
    private menuService: MenuService,
    private domSanitizer: DomSanitizer
  ) {
    this.addSvgIcon("facebook");
    this.addSvgIcon("instagram");
    this.addSvgIcon("snapchat");
    this.addSvgIcon("whatsapp");

    const config: SpaConfigSettings = {
      socialIcons: [
        { name: "facebook", alt: "Facebook", url: "https://facebook.com/" },
        { name: "instagram", alt: "Instagram", url: "https://facebook.com/" },
        { name: "snapchat", alt: "Snapchat", url: "https://facebook.com/" },
        { name: "whatsapp", alt: "WhatsApp", url: "https://facebook.com/" }
      ],
      showUserControl: true
    };

    spaConfigService.configure(config);
    menuService.items = AppMenuItems;
  }

  addSvgIcon(iconName) {
    // this.appConfigService.getSvgFile(`../assets/svg/${iconName}.svg`).subscribe(element => {
    //   console.log(element);
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../assets/svg/${iconName}.svg`
      )
    );
    // });
  }
}
