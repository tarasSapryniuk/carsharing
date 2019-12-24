import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'cars', component: CarDetailComponent },
    { path: '**', component: HomeComponent }
]