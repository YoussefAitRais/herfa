import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../partials/header/header.component";
import {SidebarComponent} from "../partials/sidebar/sidebar.component";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  router: Router = inject(Router);

  ngOnInit() {
    this.router.navigate(["/app/dashboard"]);
  }

}
