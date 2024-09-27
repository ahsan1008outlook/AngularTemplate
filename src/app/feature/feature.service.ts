import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  public header: string ='No Header Set';
  public headerButtons: string ='No Header Set';
  private URL = "https://dev-app.starbazaar.pk/admin/api/v1"
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNzE0MTE4MzM5NDQ0IiwiaWF0IjoxNzE1MTYwNzIxfQ.JI-5nv7IZscuvrVJr6QiLOKbJ9k17fZdPR31JdSVaAY"
  private headers = new HttpHeaders({Authorization: `Bearer ${this.token}`})
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    console.log('app start');
    
  }
  sub = new Subject()
  getRecords() {
    this.sub.next(this.list)
    return this.sub;
    // return this.http.get(`${this.URL}/brands-payment-security?group`, {
    //   headers: this.headers
    // });
  }
  list: any = [];
  addRecord(data: any) {
    this.list.push(data)
    console.log(this.list)
    this.router.navigate(['/feature1/list'])
    // return this.http.post(`${this.URL}/brands-payment-security`, data, {headers: this.headers}) 
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