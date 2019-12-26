import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarMaintComponent } from './car-maint/car-maint.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'car-detail/:car', component:  CarDetailComponent },
    { path: 'car-list/:count', component: CarListComponent },
    { path: 'car-maint', component: CarMaintComponent },
    { path: '**', component: HomeComponent }
]