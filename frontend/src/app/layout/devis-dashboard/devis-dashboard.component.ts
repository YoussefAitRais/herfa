import { Component, OnInit } from '@angular/core';
import { Devis, DevisService } from '../../services/devis/devis.service';

@Component({
  selector: 'app-devis-dashboard',
  templateUrl: './devis-dashboard.component.html',
  styleUrls: ['./devis-dashboard.component.css']
})
export class DevisDashboardComponent implements OnInit {
  devisList: Devis[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private devisService: DevisService) {}

  ngOnInit(): void {
    this.loadDevis();
  }

  loadDevis() {
    this.devisService.getAllDevis(0).subscribe({
      next: (data) => {
        this.devisList = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching devis', err);
        this.errorMessage = 'Failed to load devis';
        this.loading = false;
      }
    });
  }
}
