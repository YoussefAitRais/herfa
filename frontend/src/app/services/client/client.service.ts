import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import {Devis} from "../devis/devis.service";

export interface Client {
  id?: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/client';

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/create`, client);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/allClient`);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}/update`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/delete`);
  }

  deleteAllClient(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAllClient`);
  }

  demanderDevis(clientId: number, devis: Devis): Observable<Devis> {
    return this.http.post<Devis>(`${this.apiUrl}/${clientId}/demander-devis`, devis);
  }

  listDevis(clientId: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/${clientId}/devis`);
  }

  updateDevisStatus(devisId: number, status: string): Observable<Devis> {
    return this.http.put<Devis>(`${this.apiUrl}/devis/${devisId}/status?status=${status}`, {});
  }

}
