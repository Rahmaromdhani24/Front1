import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from '../../Modeles/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  Apiurl ="http://localhost:8281/medecin"
  constructor(private Http:HttpClient) { }
  
  login(username : string, password: string) {
    return this.Http.post(`${this.Apiurl+'/login'}`,{username, password});}

getMedecin():Observable<any[]>{
  return this.Http.get<Medecin[]>(this.Apiurl+'/all');
}

updateMedecin(val:any):any{
  return this.Http.put(this.Apiurl+'/updateMedecin/',val);
}

deleteMedecin(val:any):any{
  return this.Http.delete(this.Apiurl+'/delecteMedecin/'+val);
}

getMedecinById(val:any):any{
  return this.Http.get(this.Apiurl+'/getMedecin/'+val);
}
}
