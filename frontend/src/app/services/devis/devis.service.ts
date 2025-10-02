import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Devis {
  id?: number;
  dateDevis: string;
  amount: number;
  status: string;
  clientId?: number;
  artisanId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/api/devis';

  createDevis(devis: Devis): Observable<Devis> {
    return this.http.post<Devis>(`${this.apiUrl}/create`, devis);
  }

  getAllDevis(): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/allDevis`);
  }

  getDevisById(id: number): Observable<Devis> {
    return this.http.get<Devis>(`${this.apiUrl}/${id}`);
  }

  updateDevis(id: number, devis: Devis): Observable<Devis> {
    return this.http.put<Devis>(`${this.apiUrl}/${id}`, devis);
  }

  deleteDevis(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  sendDevis(devis: Devis): Observable<Devis> {
    return this.http.post<Devis>(`${this.apiUrl}/send`, devis);
  }

  listDevisByClient(clientId: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/Client/${clientId}`);
  }

  listDevisByArtisan(artisanId: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/Artisan/${artisanId}`);
  }

  updateStatus(id: number, status: string): Observable<Devis> {
    return this.http.put<Devis>(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }
}