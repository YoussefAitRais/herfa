import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevisService } from '../../../../services/devis/devis.service';
import { ArtisanService } from '../../../../services/artisan/artisan.service';
import { ClientService } from '../../../../services/client/client.service';
import { Devis } from '../../../../services/devis/devis.service';
import { Client } from '../../../../services/client/client.service';

@Component({
  selector: 'app-dashboard-artisant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-artisant.component.html',
  styleUrl: './dashboard-artisant.component.css'
})
export class DashboardArtisantComponent implements OnInit {
  // Dashboard statistics
  totalDevis: number = 0;
  acceptedDevis: number = 0;
  pendingDevis: number = 0;

  // List of devis for the table
  devisList: Devis[] = [];

  // Client list for requesting devis
  clients: Client[] = [];

  // Form variables
  selectedClientId: number | null = null;
  amount: number | null = null;
  requestMessage: string = '';
  errorMessage: string = '';
  showRequestForm: boolean = false;
  selectedClient: Client | null = null;

  // For demo purposes, we'll use a fixed artisan ID
  // In a real application, this would come from authentication
  artisanId: number = 1;

  constructor(
    private devisService: DevisService,
    private artisanService: ArtisanService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadClients();
  }

  // Load all dashboard data
  loadDashboardData(): void {
    this.loadDevisStatistics();
    this.loadDevisList();
  }

  // Load devis statistics
  loadDevisStatistics(): void {
    this.artisanService.getDevisByArtisan(this.artisanId).subscribe({
      next: (devisList: Devis[]) => {
        this.totalDevis = devisList.length;

        this.acceptedDevis = devisList.filter((devis: Devis) => devis.status === 'ACCEPTER').length;
        this.pendingDevis = devisList.filter((devis: Devis) => devis.status === 'PENDING').length;
      },
      error: (error: any) => {
        console.error('Error loading devis statistics', error);
      }
    });
  }

  // Load devis list for the table
  loadDevisList(): void {
    this.artisanService.getDevisByArtisan(this.artisanId).subscribe({
      next: (devisList: Devis[]) => {
        this.devisList = devisList;
        console.log('Loaded devis list:', devisList);
      },
      error: (error: any) => {
        console.error('Error loading devis list', error);
      }
    });
  }

  // Load clients for requesting devis
  loadClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (data: Client[]) => {
        this.clients = data;
      },
      error: (error: any) => {
        console.error('Error loading clients', error);
        this.errorMessage = 'Failed to load clients. Please try again.';
      }
    });
  }

  // Update devis status
  updateDevisStatus(devisId: number, status: string): void {
    this.devisService.updateStatus(devisId, status).subscribe({
      next: (updatedDevis: Devis) => {
        // Update the local list
        const index = this.devisList.findIndex(d => d.id === devisId);
        if (index !== -1) {
          this.devisList[index] = updatedDevis;
        }

        // Reload statistics
        this.loadDevisStatistics();
      },
      error: (error: any) => {
        console.error('Error updating devis status', error);
      }
    });
  }

  // Show request form for a client
  showRequestFormFor(client: Client): void {
    this.selectedClient = client;
    this.selectedClientId = client.id || null;
    this.amount = null;
    this.showRequestForm = true;
    this.requestMessage = '';
    this.errorMessage = '';
  }

  // Hide request form
  hideRequestForm(): void {
    this.showRequestForm = false;
    this.selectedClient = null;
    this.selectedClientId = null;
    this.amount = null;
  }

  // Request devis from client
  requestDevis(): void {
    if (!this.selectedClientId || !this.amount) {
      this.errorMessage = 'Please enter an amount.';
      return;
    }

    if (this.amount <= 0) {
      this.errorMessage = 'Amount must be greater than zero.';
      return;
    }

    const devis: Devis = {
      dateDevis: new Date().toISOString(),
      amount: this.amount,
      status: 'PENDING',
      clientId: this.selectedClientId,
      artisanId: this.artisanId
    };

    this.devisService.sendDevis(devis).subscribe({
      next: (response: Devis) => {
        this.requestMessage = `Devis request sent successfully to ${this.selectedClient?.name}!`;
        this.errorMessage = '';
        this.amount = null;

        // Reload devis list to show the new request
        this.loadDevisList();
        this.loadDevisStatistics();

        // Hide form after successful submission
        setTimeout(() => {
          this.hideRequestForm();
        }, 2000);
      },
      error: (error: any) => {
        console.error('Error sending devis request', error);
        this.errorMessage = 'Failed to send devis request. Please try again.';
        this.requestMessage = '';
      }
    });
  }
}
