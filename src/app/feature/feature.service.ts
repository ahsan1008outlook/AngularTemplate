import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  public header: string ='No Header Set';
  public headerButtons: string ='No Header Set';
  private apiUrl = 'https://dev-app.starbazaar.pk/admin/api/v1/brands-payment-security';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNzE0MTE4MzM5NDQ0IiwiaWF0IjoxNzE1MTYwNzIxfQ.JI-5nv7IZscuvrVJr6QiLOKbJ9k17fZdPR31JdSVaAY'
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
export interface FeatureButton {
  icon: string;
  action: () => void; 
  text: string;
}
export interface FeatureSubmitButton {
  icon: string;
  action: () => void;
  text: string;
  redirectTo: string;
}