import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMedicalService {

 
  islogin = false;
  admin = false;
 

  constructor(private http: HttpClient) { }
 

  private urlLogin = 'http://localhost:8281/adminMedical/login';
  login(username : string, password: string) {
    return this.http.post(`${this.urlLogin}`,{username, password});}


  private urlGetAdminMedical = 'http://localhost:8281/adminMedical/getAdminMedical';
  getAdminMedical(id: number): Observable<Object> {
    return this.http.get(`${this.urlGetAdminMedical}/${id}`);}
  
  
}