import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../client/client.service";
import {Artisan} from "../artisan/artisan.service";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  http: HttpClient = inject(HttpClient);

  private apiUrl = 'http://localhost:8081';

  fetchClientList ():Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/allClient`);
  }

  fetchArtisanList():Observable<Artisan[]> {
    return this.http.get<Artisan[]>(`${this.apiUrl}/allArtisan`);
  }



}
