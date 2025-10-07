import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login/login-service.service';
import {Client, ClientService} from '../../services/client/client.service';
import { ArtisanService} from '../../services/artisan/artisan.service';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any[] = [];


  selectedRole: 'client' | 'artisan' | '' = '';

  constructor(
    private loginService: LoginServiceService,
    private artisanService: ArtisanService,
    private clientService: ClientService,
    private router: Router,
  ) {}

  ngOnInit(): void {

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

  fetchArtisans() {
    this.artisanService.getAllArtisans().subscribe({
      next: data => {
        data = data.map(u => {
          return {...u, role: "artisan"}
        });
        this.users = data
        console.log(this.users);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  fetchClients() {
    this.clientService.getAllClients().subscribe({
      next: data => {
        data = data.map(u => {
          return {...u, role: "client"}
        });
        this.users = data
      },
      error: err => {
        console.log(err);
      }
    })
  }

  formObj = {
    user: ""
  }
  onLoginFormSubmit ( form: FormsModule) {
    const selectedUser = JSON.parse( this.formObj.user )

    localStorage.setItem("user", JSON.stringify(selectedUser))
    localStorage.setItem("role", selectedUser.role)

    this.formObj = {
      user: ""
    }

    if ( selectedUser.role === "client" ) {
      this.router.navigate(['/app/client-dashboard']);
    }

    if ( selectedUser.role === "artisan" ) {
      this.router.navigate(['/app']);
    }

  }

  protected readonly JSON = JSON;
}
