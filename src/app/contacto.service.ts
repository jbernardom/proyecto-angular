import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'http://localhost/back/api.php'; 

  constructor(private http: HttpClient) { }

  guardarContacto(contactoData: any) {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    
    return this.http.post(this.apiUrl, contactoData, { headers });
  }
}