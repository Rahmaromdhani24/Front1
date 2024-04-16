import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  Apiurl ="http://localhost:8281/patient"
  constructor(private Http:HttpClient) { }
  
getPatient():Observable<any[]>{
  return this.Http.get<PatientService[]>(this.Apiurl+'/all');
}
deletePatient(val:any):any{
  return this.Http.delete(this.Apiurl+'deletPatient/'+val);
}


}
