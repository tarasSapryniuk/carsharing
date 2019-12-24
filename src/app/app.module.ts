import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HttpClientModule } from "@angular/common/http";
import {FlexLayoutModule} from '@angular/flex-layout';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { AppConfigService } from "./services/app-config.service";
import { IconBarComponent } from "./icon-bar/icon-bar.component";
import { ScreenService } from "./services/screen.service";
import { NavService } from "./services/nav.service";
import { ScreenSmallDirective } from "./directives/screen-small.directive";
import { ScreenLargeDirective } from "./directives/screen-large.directive";
import { MenuService } from "./services/menu.service";
import { MenuComponent } from "./menus/menu/menu.component";
import { HomeComponent } from "./routes/home/home.component";
import { SettingsComponent } from "./routes/settings/settings.component";
import { CarDetailComponent } from "./routes/car-detail/car-detail.component";
import { CarMaintComponent } from "./routes/car-maint/car-maint.component";
import { CarListComponent } from "./routes/car-list/car-list.component";
import { PopupMenuComponent } from "./menus/popup-menu/popup-menu.component";
import { SidebarMenuComponent } from "./menus/sidebar-menu/sidebar-menu.component";
import { from } from "rxjs";

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    IconBarComponent,
    ScreenLargeDirective,
    ScreenSmallDirective,
    MenuComponent,
    HomeComponent,
    SettingsComponent,
    CarDetailComponent,
    CarMaintComponent,
    CarListComponent,
    PopupMenuComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: [MaterialComponents],
  providers: [AppConfigService, ScreenService, MenuService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
