import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtisanService } from '../../../../services/artisan/artisan.service';
import { DevisService } from '../../../../services/devis/devis.service';

import { Devis } from '../../../../services/devis/devis.service';
import {ArtisanModel} from "../../../../models/artisan-model";

@Component({
  selector: 'app-client-demande',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-demande.component.html',
  styleUrl: './client-demande.component.css'
})
export class ClientDemandeComponent implements OnInit {
  artisans: ArtisanModel[] = [];
  selectedArtisanId: number | null = null;
  amount: number | null = null;
  requestMessage: string = '';
  errorMessage: string = '';
  showRequestForm: boolean = false;
  selectedArtisan: ArtisanModel | null = null;

  // For demo purposes, we'll use a fixed client ID
  // In a real application, this would come from authentication
  clientId: number = 1;

  constructor(
    private artisanService: ArtisanService,
    private devisService: DevisService
  ) {}

  ngOnInit(): void {
    this.loadArtisans();
  }

  loadArtisans(): void {
    this.artisanService.getAllArtisans().subscribe({
      next: (data: ArtisanModel[]) => {
        this.artisans = data;
        console.log(this.artisans);
      },
      error: (error: any) => {
        console.error('Error loading artisans', error);
        this.errorMessage = 'Failed to load artisans. Please try again.';
      }
    });
  }

  showRequestFormFor(artisan: ArtisanModel): void {
    this.selectedArtisan = artisan;
    this.selectedArtisanId = artisan.id || null;
    this.amount = null;
    this.showRequestForm = true;
    this.requestMessage = '';
    this.errorMessage = '';
  }

  hideRequestForm(): void {
    this.showRequestForm = false;
    this.selectedArtisan = null;
    this.selectedArtisanId = null;
    this.amount = null;
  }

  requestDevis(): void {
    console.log(this.selectedArtisan);
    if (!this.selectedArtisanId || !this.amount) {
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
      clientId: this.clientId,
      artisanId: this.selectedArtisanId
    };

    this.devisService.sendDevis(devis).subscribe({
      next: (response) => {
        this.requestMessage = `Devis request sent successfully to ${this.selectedArtisan?.name}!`;
        this.errorMessage = '';
        this.amount = null;
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
