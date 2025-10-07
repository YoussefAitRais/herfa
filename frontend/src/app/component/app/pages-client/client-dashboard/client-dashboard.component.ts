import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService, Client } from '../../../../services/client/client.service';
import { DevisService, Devis } from '../../../../services/devis/devis.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent implements OnInit {
  clients: Client[] = [];
  devisList: Devis[] = [];


  clientId: number = 1;

  constructor(
    private clientService: ClientService,
    private devisService: DevisService
  ) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadDevisForClient();
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (data: Client[]) => {
        this.clients = data;
      },
      error: (error: any) => {
        console.error('Error loading clients', error);
      }
    });
  }

  loadDevisForClient(): void {
    this.clientService.listDevis(this.clientId).subscribe({
      next: (data: Devis[]) => {
        this.devisList = data;
        console.log(this.devisList);
      },
      error: (error: any) => {
        console.error('Error loading devis for client', error);
      }
    });
  }

  updateDevisStatus(devisId: number, status: string): void {
    this.devisService.updateStatus(devisId, status).subscribe({
      next: (updatedDevis: Devis) => {
        const index = this.devisList.findIndex(d => d.id === devisId);
        if (index !== -1) {
          this.devisList[index] = updatedDevis;
        }
      },
      error: (error: any) => {
        console.error('Error updating devis status', error);
      }
    });
  }
}
