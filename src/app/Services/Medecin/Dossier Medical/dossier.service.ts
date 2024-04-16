import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DossierMedical } from 'src/app/Modeles/DossierMedecial';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  Apiurl ="http://localhost:8281/DossierMedical"

  constructor(private Http:HttpClient) { }
  
getDossier():Observable<any[]>{
  return this.Http.get<DossierMedical[]>(this.Apiurl+'/all');
}



updateDossier(val:any):any{
  return this.Http.put(this.Apiurl+'/update/',val);
}

deleteDossier(val:any):any{
  return this.Http.delete(this.Apiurl+'/'+val);
}

getDosssierById(val:any):any{
  return this.Http.get(this.Apiurl+'/get/'+val);
}

}