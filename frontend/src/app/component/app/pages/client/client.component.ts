import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../../../../services/artisan/artisan.service';
import { DevisService, Devis } from '../../../../services/devis/devis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ArtisanModel} from "../../../../models/artisan-model";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  // List of all artisans
  artisans: ArtisanModel[] = [];

  // Form data
  selectedArtisanId: number | null = null;
  amount: number | null = null;

  // Messages
  successMessage: string = '';
  errorMessage: string = '';

  // UI state
  showForm: boolean = false;
  formArtisan: ArtisanModel | null = null;

  // Client ID (would come from authentication in a real app)
  clientId: number = 1;

  constructor(
    private artisanService: ArtisanService,
    private devisService: DevisService
  ) {}

  ngOnInit(): void {
    this.getArtisans();
  }

  // Get all artisans from the server
  getArtisans(): void {
    this.artisanService.getAllArtisans().subscribe(
      (data) => {
        this.artisans = data;
      },
      (error) => {
        console.error('Error loading artisans', error);
        this.errorMessage = 'Could not load artisans. Please try again.';
      }
    );
  }

  // Show the quote request form for an artisan
  openRequestForm(artisan: ArtisanModel): void {
    this.formArtisan = artisan;
    this.selectedArtisanId = artisan.id || null;
    this.amount = null;
    this.showForm = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  // Hide the quote request form
  closeRequestForm(): void {
    this.showForm = false;
    this.formArtisan = null;
    this.selectedArtisanId = null;
    this.amount = null;
  }

  // Send a quote request to an artisan
  sendQuoteRequest(): void {
    // Check if we have all required data
    if (!this.selectedArtisanId || !this.amount || this.amount <= 0) {
      this.errorMessage = 'Please enter a valid amount.';
      return;
    }

    // Create the quote object
    const quote: Devis = {
      dateDevis: new Date().toISOString(),
      amount: this.amount,
      status: 'PENDING',
      clientId: this.clientId,
      artisanId: this.selectedArtisanId
    };

    // Send the quote to the server
    this.devisService.sendDevis(quote).subscribe(
      (response) => {
        this.successMessage = `Quote sent to ${this.formArtisan?.name}!`;
        this.errorMessage = '';
        this.amount = null;

        // Close the form after 2 seconds
        setTimeout(() => {
          this.closeRequestForm();
        }, 2000);
      },
      (error) => {
        console.error('Error sending quote', error);
        this.errorMessage = 'Failed to send quote. Please try again.';
        this.successMessage = '';
      }
    );
  }
}
