import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialite } from 'src/app/Modeles/specialite';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  constructor(private http: HttpClient) { }
 

  private urlGetAllDepartements = 'http://localhost:8281/specialite/getAll';
  getAllDepartements(): Observable<Specialite[]> {
    return this.http.get<Specialite[]>(this.urlGetAllDepartements);
  }
  
  
}