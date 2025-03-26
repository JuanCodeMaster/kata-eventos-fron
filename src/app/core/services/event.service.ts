import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private apiUrl = 'http://localhost:8082/api/events';

  constructor(private http: HttpClient) {}

  // ✅ Método para centralizar la obtención de headers con token
  private getAuthHeaders(): HttpHeaders {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    return new HttpHeaders({
      'Authorization': `Bearer ${token ?? ''}`
    });
  }

  // 🔹 Obtener todos los eventos
  getEvents(): Observable<Event[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Event[]>(this.apiUrl, { headers });
  }
  
  

  // 🔹 Obtener un evento por ID
  getEventById(id: number): Observable<Event> {
    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<Event>(`${this.apiUrl}/${id}`, { headers });
  }
  
  // 🔹 Reservar un evento (opcional, si lo implementas)
  reserveEvent(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/reserve`, {}, {
      headers: this.getAuthHeaders()
    });
  }
}