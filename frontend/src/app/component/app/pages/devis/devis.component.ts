import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisService, Devis } from '../../../../services/devis/devis.service';
import { ClientService } from '../../../../services/client/client.service';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent implements OnInit {
  devisList: Devis[] = [];
  
  // For demo purposes, we'll use a fixed client ID
  // In a real application, this would come from authentication
  clientId: number = 1;

  constructor(
    private devisService: DevisService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.loadReceivedDevis();
  }

  loadReceivedDevis(): void {
    // Load devis received by the client
    this.clientService.listDevis(this.clientId).subscribe({
      next: (data: Devis[]) => {
        this.devisList = data;
      },
      error: (error: any) => {
        console.error('Error loading received devis', error);
      }
    });
  }

  updateDevisStatus(devisId: number, status: string): void {
    this.devisService.updateStatus(devisId, status).subscribe({
      next: (updatedDevis: Devis) => {
        // Update the local list
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