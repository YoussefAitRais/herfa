import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ArtisanDashboardComponent} from "./layout/artisan-dashboard/artisan-dashboard.component";
import {ClientDashboardComponent} from "./layout/client-dashboard/client-dashboard.component";
import {DevisDashboardComponent} from "./layout/devis-dashboard/devis-dashboard.component";
import {LayoutComponent} from "./component/app/layout/layout.component";
import {DashboardComponent} from "./component/app/pages/dashboard/dashboard.component";
import {ClientComponent} from "./component/app/pages/client/client.component";
import {DevisComponent} from "./component/app/pages/devis/devis.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'clients-dashboard', component: ClientDashboardComponent },
  { path: 'artisans-dashboard', component: ArtisanDashboardComponent },
  { path: 'devis-dashboard', component: DevisDashboardComponent },

  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'devis',
        component: DevisComponent
      }
    ]
  },

  { path: '**', redirectTo: '' }
];
