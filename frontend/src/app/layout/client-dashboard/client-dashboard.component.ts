import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../../services/client/client.service';
import { DevisService, Devis } from '../../services/devis/devis.service';
import { ArtisanService, Artisan } from '../../services/artisan/artisan.service';
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  clients: Client[] = [];
  artisans: Artisan[] = [];
  devisList: Devis[] = [];
  selectedClientId: number | null = null;
  showArtisans = false;
  selectedArtisanId: number | null = null;
  newDevisAmount: number = 0;

  constructor(
    private clientService: ClientService,
    private devisService: DevisService,
    private artisanService: ArtisanService
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

  loadArtisans() {
    this.artisanService.getAllArtisans().subscribe({
      next: (data) => this.artisans = data,
      error: (err) => console.error('Error fetching artisans', err)
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

  viewArtisans() {
    this.showArtisans = true;
    this.loadArtisans();
  }

  backToDevis() {
    this.showArtisans = false;
    if (this.selectedClientId) {
      this.loadDevisForClient(this.selectedClientId);
    }
  }

  selectArtisan(artisanId: number) {
    this.selectedArtisanId = artisanId;
  }

  requestDevis() {
    if (this.selectedClientId && this.selectedArtisanId) {
      const devis: Devis = {
        dateDevis: new Date().toISOString(),
        amount: this.newDevisAmount,
        status: 'PENDING',
        clientId: this.selectedClientId,
        artisanId: this.selectedArtisanId
      };

      this.devisService.sendDevis(devis).subscribe({
        next: () => {
          // Reset form
          this.newDevisAmount = 0;
          this.selectedArtisanId = null;
          // Reload devis list
          if (this.selectedClientId) {
            this.loadDevisForClient(this.selectedClientId);
          }
          // Go back to devis list
          this.showArtisans = false;
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