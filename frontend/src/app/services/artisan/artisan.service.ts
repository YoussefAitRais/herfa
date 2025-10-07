import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Devis } from '../devis/devis.service';
import {ArtisanModel} from "../../models/artisan-model";


@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8081/artisans';

  createArtisan(artisan: ArtisanModel): Observable<ArtisanModel> {
    return this.http.post<ArtisanModel>(`${this.apiUrl}/create`, artisan);
  }

  getAllArtisans(): Observable<ArtisanModel[]>{
    return this.http.get<ArtisanModel[]>(`${this.apiUrl}/allArtisan`);
  }

  getArtisanById(id: number): Observable<ArtisanModel> {
    return this.http.get<ArtisanModel>(`${this.apiUrl}/${id}`);
  }

  updateArtisan(id: number, artisan: ArtisanModel): Observable<ArtisanModel> {
    return this.http.put<ArtisanModel>(`${this.apiUrl}/${id}`, artisan);
  }

  deleteArtisanById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDevisByArtisan(id: number): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/${id}/devis`);
  }

}
