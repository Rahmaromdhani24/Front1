import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlageService {
  Apiurl ="http://localhost:8281/plageHorraire"
  constructor(private Http:HttpClient) { }
  
getPlage():Observable<any[]>{
  return this.Http.get<any[]>(this.Apiurl+'/all');
}

addPlage(val:any):any{
   return this.Http.post(this.Apiurl+'/add',val);
}

updatePlage(val:any):any{
  return this.Http.put(this.Apiurl+'/update/',val);
}

deletePlage(val:any):any{
  return this.Http.delete(this.Apiurl+'/'+val);
}

getPlageById(val:any):any{
  return this.Http.get(this.Apiurl+'/get/'+val);
}
}
