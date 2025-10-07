import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { HeaderComponent } from '../partials-client/header/header.component';
import { SidebarComponent } from '../partials-client/sidebar/sidebar.component';

@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.css'
})
export class LayoutClientComponent implements OnInit {
  router: Router = inject( Router );
  role: string | undefined = localStorage.getItem("role")?.trim().toLowerCase();

  ngOnInit() {
    const storedRole = localStorage.getItem("role");
    const normalizedRole = storedRole?.trim().toLowerCase();

    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    }

    if (normalizedRole === "artisan") {
      console.log("Redirecting to dashboard...");
      this.router.navigate(['/app/dashboard']);
    }
  }

}



