import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisService, Devis } from '../../../../services/devis/devis.service';
import { ArtisanService } from '../../../../services/artisan/artisan.service';

@Component({
  selector: 'app-devis-artisant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devis-artisant.component.html',
  styleUrl: './devis-artisant.component.css'
})
export class DevisArtisantComponent implements OnInit {
  // List of devis for the table
  devisList: Devis[] = [];
  
  // For demo purposes, we'll use a fixed artisan ID
  // In a real application, this would come from authentication
  artisanId: number = 1;

  constructor(
    private devisService: DevisService,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    this.loadDevisList();
  }

  // Load devis list for the table
  loadDevisList(): void {
    this.devisService.listDevisByArtisan(this.artisanId).subscribe({
      next: (devisList) => {
        this.devisList = devisList;
      },
      error: (error) => {
        console.error('Error loading devis list', error);
      }
    });
  }

  // Update devis status
  updateDevisStatus(devisId: number, status: string): void {
    this.devisService.updateStatus(devisId, status).subscribe({
      next: (updatedDevis) => {
        // Update the local list
        const index = this.devisList.findIndex(d => d.id === devisId);
        if (index !== -1) {
          this.devisList[index] = updatedDevis;
        }
      },
      error: (error) => {
        console.error('Error updating devis status', error);
      }
    });
  }
}