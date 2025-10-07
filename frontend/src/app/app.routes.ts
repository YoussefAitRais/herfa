import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {ClientDashboardComponent} from "./layout/client-dashboard/client-dashboard.component";
import {DevisDashboardComponent} from "./layout/devis-dashboard/devis-dashboard.component";
import {LayoutComponent} from "./component/app/layout/layout.component";
import {DashboardComponent} from "./component/app/pages/dashboard/dashboard.component";
import {ClientComponent} from "./component/app/pages/client/client.component";
import {DevisComponent} from "./component/app/pages/devis/devis.component";
import { ArtisantComponent } from './component/app/pages-client/artisant/artisant.component';
import { DashboardArtisantComponent } from './component/app/pages-client/dashboard-artisant/dashboard-artisant.component';
import { DevisArtisantComponent } from './component/app/pages-client/devis-artisant/devis-artisant.component';
import { LayoutClientComponent } from './component/app/layout-client/layout-client.component';
import { ClientDashboardComponent as ClientDashboardPageComponent } from './component/app/pages-client/client-dashboard/client-dashboard.component';
import { ClientDemandeComponent } from './component/app/pages-client/client-demande/client-demande.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'clients-dashboard', component: ClientDashboardComponent },
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
      },
      {
        path: 'artisant',
        component: ArtisantComponent
      },
      {
        path: 'dashboard-artisant',
        component: DashboardArtisantComponent
      },
      {
        path: 'devis-artisant',
        component: DevisArtisantComponent
      }
    ]
  },

  {
    path: 'app/client-dashboard',
    component: LayoutClientComponent,
    children: [
      {
        path: '',
        component: ClientDashboardPageComponent
      },
      {
        path: 'client-demande',
        component: ClientDemandeComponent
      }
    ]
  },

  { path: '**', redirectTo: '' }
];
