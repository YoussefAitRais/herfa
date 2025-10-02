import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../../services/client/client.service';
import { DevisService, Devis } from '../../services/devis/devis.service';
import { ArtisanService, Artisan } from '../../services/artisan/artisan.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-client-space',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './client-space.component.html'
})
export class ClientSpaceComponent implements OnInit {
  clients: Client[] = [];
  artisans: Artisan[] = [];
  devisList: Devis[] = [];
  selectedClient: Client | null = null;
  selectedDevis: Devis | null = null;
  showClientSelection = true;
  showArtisanList = false;
  showDevisList = false;
  currentClientId: number | null = null;

  constructor(
    private clientService: ClientService,
    private devisService: DevisService,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadArtisans();
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
    this.currentClientId = clientId;
    this.showClientSelection = false;
    this.showArtisanList = true;
  }

  backToClientSelection() {
    this.showClientSelection = true;
    this.showArtisanList = false;
    this.showDevisList = false;
  }

  viewMyDevis() {
    if (this.currentClientId) {
      this.loadDevisForClient(this.currentClientId);
      this.showArtisanList = false;
      this.showDevisList = true;
    }
  }

  loadDevisForClient(clientId: number) {
    this.devisService.listDevisByClient(clientId).subscribe({
      next: (data) => this.devisList = data,
      error: (err) => console.error('Error fetching devis', err)
    });
  }

  requestDevisToArtisan(artisanId: number) {
    if (this.currentClientId) {
      const newDevis: Devis = {
        dateDevis: new Date().toISOString(),
        amount: 0,
        status: 'PENDING',
        clientId: this.currentClientId,
        artisanId: artisanId
      };

      this.devisService.sendDevis(newDevis).subscribe({
        next: () => {
          alert('Devis request sent to artisan successfully!');
          this.viewMyDevis();
        },
        error: (err) => console.error('Error sending devis', err)
      });
    }
  }

  updateDevisStatus(devisId: number, status: string) {
    this.devisService.updateStatus(devisId, status).subscribe({
      next: () => {
        if (this.currentClientId) {
          this.loadDevisForClient(this.currentClientId);
        }
      },
      error: (err) => console.error('Error updating devis status', err)
    });
  }

  getArtisanName(artisanId: number): string {
    const artisan = this.artisans.find(a => a.id === artisanId);
    return artisan ? `${artisan.name} (${artisan.job})` : 'Unknown Artisan';
  }
}