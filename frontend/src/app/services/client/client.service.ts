import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

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

  private apiUrl = 'http://localhost:8081/clients';

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/create`, {client})
  }

  getClientById (id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/getClientById/${id}`)
  }

  getAllClients (): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/getAllClients`);
  }

  updateClient (id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/updateClient`, client)
  }

  deleteClient (id: number): Observable<Client> {
    return this.http.delete<Client>(`${this.apiUrl}/deleteClient/${id}`)
  }

  deleteAllClient (): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAllClient/`)
  }


}
