import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../../services/client/client.service';
import { DevisService, Devis } from '../../services/devis/devis.service';
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {
  clients: Client[] = [];
  devisList: Devis[] = [];
  selectedClientId: number | null = null;
  showClients = false;
  selectedClientForDevisId: number | null = null;
  newDevisAmount: number = 0;

  constructor(
    private clientService: ClientService,
    private devisService: DevisService
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAllClients().subscribe({
      next: (data) => this.clients = data,
      error: (err) => console.error('Error fetching clients', err)
    });
  }

  selectClient(clientId: number) {
    this.selectedClientId = clientId;
    this.loadDevisForClient(clientId);
  }

  loadDevisForClient(clientId: number) {
    this.devisService.listDevisByClient(clientId).subscribe({
      next: (data) => this.devisList = data,
      error: (err) => console.error('Error fetching devis', err)
    });
  }

  viewClients() {
    this.showClients = true;
    this.loadClients();
  }

  backToDevis() {
    this.showClients = false;
    if (this.selectedClientId) {
      this.loadDevisForClient(this.selectedClientId);
    }
  }

  selectClientForDevis(clientId: number) {
    this.selectedClientForDevisId = clientId;
  }

  requestDevis() {
    if (this.selectedClientId && this.selectedClientForDevisId) {
      const devis: Devis = {
        dateDevis: new Date().toISOString(),
        amount: this.newDevisAmount,
        status: 'PENDING',
        clientId: this.selectedClientForDevisId,
        artisanId: this.selectedClientId
      };

      this.devisService.sendDevis(devis).subscribe({
        next: () => {
          // Reset form
          this.newDevisAmount = 0;
          this.selectedClientForDevisId = null;
          // Reload devis list
          if (this.selectedClientId) {
            this.loadDevisForClient(this.selectedClientId);
          }
          // Go back to devis list
          this.showClients = false;
        },
        error: (err) => console.error('Error requesting devis', err)
      });
    }
  }

  updateDevisStatus(devisId: number, status: string) {
    this.devisService.updateStatus(devisId, status).subscribe({
      next: () => {
        if (this.selectedClientId) {
          this.loadDevisForClient(this.selectedClientId);
        }
      },
      error: (err) => console.error('Error updating devis status', err)
    });
  }
}