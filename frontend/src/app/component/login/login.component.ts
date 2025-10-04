import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login/login-service.service';
import { Client } from '../../services/client/client.service';
import { Artisan } from '../../services/artisan/artisan.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clients: Client[] = [];
  artisans: Artisan[] = [];

  selectedRole: 'client' | 'artisan' | '' = '';

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.loginService.fetchClientList().subscribe((data: Client[]) => {
      this.clients = data;
      console.log('Clients:', this.clients);
    });

    this.loginService.fetchArtisanList().subscribe((data: Artisan[]) => {
      this.artisans = data;
      console.log('Artisans:', this.artisans);
    });
  }

  onRoleChange(event: any) {
    this.selectedRole = event.target.value;
  }

  goToDashboard() {
    if (this.selectedRole === 'client') {
      // Redirect to client dashboard or handle client logic
      console.log('Redirecting to Client Dashboard');
    } else if (this.selectedRole === 'artisan') {
      // Redirect to artisan dashboard or handle artisan logic
      console.log('Redirecting to Artisan Dashboard');
    } else {
      alert('Please select a role first!');
    }
  }
}
