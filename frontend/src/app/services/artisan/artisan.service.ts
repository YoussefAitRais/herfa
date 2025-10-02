import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Artisan {
  id?: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  job: string;
  location: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/artisans';

  createArtisan(artisan: Artisan): Observable<Artisan> {
    return this.http.post<Artisan>(`${this.apiUrl}/create`, artisan);
  }

  getAllArtisans(): Observable<Artisan[]>{
    return this.http.get<Artisan[]>(`${this.apiUrl}/allArtisan`);
  }

  getArtisanById(id: number): Observable<Artisan> {
    return this.http.get<Artisan>(`${this.apiUrl}/${id}`);
  }

  updateArtisan(id: number, artisan: Artisan): Observable<Artisan> {
    return this.http.put<Artisan>(`${this.apiUrl}/${id}`, artisan);
  }

  deleteArtisanById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDevisByArtisan(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/devis`);
  }

}
