import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Artisan} from "../artisan/artisan.service";
import {Observable} from "rxjs";


export interface Devis {
  id?: number;
  dateDevis: string;
  amount: number;
  devisSatus: string;
  clientId?: number;
  artisanId?: number;
}

@Injectable({
  providedIn: 'root'
})

export class DevisService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/api/deviss';

  createDevis (id: number, artisan: Artisan): Observable<Devis> {
    return this.http.post<Devis>(`${this.apiUrl}/${artisan.id}`, artisan)
  }

  getAllDevis (id: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/${id}`)
  }

  getDevisbyId (id: number): Observable<Devis> {
    return this.http.get<Devis>(`${this.apiUrl}/${id}`)
  }

  updateDevis (id: number, artisan: Artisan): Observable<Devis> {
    return this.http.put<Devis>(`${this.apiUrl}/${id}`, artisan)
  }

  deleteDevis (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  sendDevis (id: number, artisan: Artisan): Observable<Devis> {
    return this.http.post<Devis>(`${this.apiUrl}/${id}`, artisan)
  }

  listDevisByClient(clientId: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/Client/${clientId}`);
  }

  listDevisByArtisan (artisanId: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/Artisan/${artisanId}`)
  }

  updateStatus(id: number, status: string): Observable<Devis> {
    return this.http.put<Devis>(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }

}
