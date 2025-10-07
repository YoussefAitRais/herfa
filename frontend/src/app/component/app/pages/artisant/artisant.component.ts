import { Component, OnInit } from '@angular/core';
import { ArtisanService, Artisan } from '../../../../services/artisan/artisan.service';
import { DevisService, Devis } from '../../../../services/devis/devis.service';
import { ClientService, Client } from '../../../../services/client/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './artisant.component.html',
  styleUrl: './artisant.component.css'
})
export class ArtisantComponent implements OnInit {
  artisans: Artisan[] = [];
  clients: Client[] = [];
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
    private artisanService: ArtisanService,
    private devisService: DevisService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.loadArtisans();
    this.loadClients();
  }

  loadArtisans(): void {
    this.artisanService.getAllArtisans().subscribe({
      next: (data) => {
        this.artisans = data;
      },
      error: (error) => {
        console.error('Error loading artisans', error);
        this.errorMessage = 'Failed to load artisans. Please try again.';
      }
    });
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (error) => {
        console.error('Error loading clients', error);
        this.errorMessage = 'Failed to load clients. Please try again.';
      }
    });
  }

  showRequestFormFor(client: Client): void {
    this.selectedClient = client;
    this.selectedClientId = client.id || null;
    this.amount = null;
    this.showRequestForm = true;
    this.requestMessage = '';
    this.errorMessage = '';
  }

  hideRequestForm(): void {
    this.showRequestForm = false;
    this.selectedClient = null;
    this.selectedClientId = null;
    this.amount = null;
  }

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
      next: (response) => {
        this.requestMessage = `Devis request sent successfully to ${this.selectedClient?.name}!`;
        this.errorMessage = '';
        this.amount = null;
        // Hide form after successful submission
        setTimeout(() => {
          this.hideRequestForm();
        }, 2000);
      },
      error: (error) => {
        console.error('Error sending devis request', error);
        this.errorMessage = 'Failed to send devis request. Please try again.';
        this.requestMessage = '';
      }
    });
  }
}