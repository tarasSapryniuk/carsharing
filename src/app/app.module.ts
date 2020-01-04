import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserService } from "./services/user.service";
import { HomeComponent } from "./routes/home/home.component";
import { SettingsComponent } from "./routes/settings/settings.component";
import { CarDetailComponent } from "./routes/car-detail/car-detail.component";
import { CarMaintComponent } from "./routes/car-maint/car-maint.component";
import { CarListComponent } from "./routes/car-list/car-list.component";
import { AuthenticatedComponent } from "./routes/authenticated/authenticated.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SpaModule } from "../spa/spa.module";
import { UserApi } from "src/spa/users/users-api";
import { AuthGuard } from "./services/auth-guard.service";
import { AppMenuItems } from './app.menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    CarDetailComponent,
    CarMaintComponent,
    CarListComponent,
    AuthenticatedComponent
  ],
  imports: [BrowserModule, SpaModule, AppRoutingModule],
  providers: [
    UserService,
    {
      provide: UserApi,
      useExisting: UserService
    },
    AuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
