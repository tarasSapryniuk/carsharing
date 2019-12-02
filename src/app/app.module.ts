import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AppConfigService } from './services/app-config.service';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ScreenService } from './services/screen.service';
import { ScreenSmallDirective } from './directives/screen-small.directive';
import { ScreenLargeDirective } from './directives/screen-large.directive';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    IconBarComponent,
    ScreenLargeDirective,
    ScreenSmallDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents,
    HttpClientModule
  ],
  exports: [
    MaterialComponents
  ],
  providers: [
    AppConfigService,
    ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
