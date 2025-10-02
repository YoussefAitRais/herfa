import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ArtisanDashboardComponent} from "./layout/artisan-dashboard/artisan-dashboard.component";
import {ClientDashboardComponent} from "./layout/client-dashboard/client-dashboard.component";
import {DevisDashboardComponent} from "./layout/devis-dashboard/devis-dashboard.component";
import {ClientSpaceComponent} from "./layout/client-space/client-space.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'clients-dashboard', component: ClientDashboardComponent },
  { path: 'artisans-dashboard', component: ArtisanDashboardComponent },
  { path: 'devis-dashboard', component: DevisDashboardComponent },

  { path: '**', redirectTo: '' }
];