import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from 'src/app/Modeles/Rendez-Vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  Apiurl ="http://localhost:8281/rendezVous"
  constructor(private Http:HttpClient) { }
  
getRendez():Observable<any[]>{
  return this.Http.get<RendezVous[]>(this.Apiurl+'/getAll');
}


deleteRendez(val:any):any{
  return this.Http.delete(this.Apiurl+'/deletRendezVous/'+val);
}



}
