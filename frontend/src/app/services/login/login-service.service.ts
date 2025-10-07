import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../client/client.service";
import {ArtisanModel} from "../../models/artisan-model";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  http: HttpClient = inject(HttpClient);

  private apiUrl = 'http://localhost:8081';

  fetchClientList ():Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/allClient`);
  }

  fetchArtisanList():Observable<ArtisanModel[]> {
    return this.http.get<ArtisanModel[]>(`${this.apiUrl}/allArtisan`);
  }



}
