import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDigitalService {
  islogin = false;
  admin = false;
  DepartementData :any=[];
  testTabDepartement : number ; 
  MedecinData :any=[];
  testTabMedecins : number ; 
  PatientData :any=[];
  testTabPatients : number ;
  SecretairesData :any=[];
  testTabSecretaires : number ; 
  constructor(private http: HttpClient) { }
 

  private urlLogin = 'http://localhost:8281/adminDigital/login';
  login(username : string, password: string) {
  return this.http.post(`${this.urlLogin}`,{username, password});}


  private urlAdminDigital = 'http://localhost:8281/adminDigital/getAdminDigital';
  getAdminDigital(id: number): Observable<Object> {
  return this.http.get(`${this.urlAdminDigital}/${id}`);}

  private urlUpdate= 'http://localhost:8281/adminDigital/update';
  updatedata(id: number, value: any ): Observable<Object> {
  return this.http.put(`${this.urlUpdate}/${id}`, value);}

  private urlImage= 'http://localhost:8281/adminDigital/updateImageProfileAdminDigial';  
  updateImage(id: number, file : File): Observable<any> {
  return this.http.put(`${this.urlImage}/${id}`,file);}
      
  /************************************** Départements **************************************************/  
  private urlDeleteDepartement = 'http://localhost:8281/specialite/deletSpecialite';
  deleteDepartement(id : number): Observable<any> {
  return this.http.delete(`${this.urlDeleteDepartement}/${id}`);}
  
  private urlGetAllDepartement = 'http://localhost:8281/specialite/getAll';
  getAllDepartement(): Observable<Object> {
  return this.http.get(`${this.urlGetAllDepartement}`);}
  
  private urlGetDepartement = 'http://localhost:8281/specialite/getSpecialite';
  getDepartement(id : number): Observable<number> {
  return this.http.get<number>(`${this.urlGetDepartement}/${id}`);}

  private urlAddDepartement= 'http://localhost:8281/specialite/addSpecialite';
  addDepartement(value:any): Observable<any>{
  return this.http.post(`${this.urlAddDepartement}`, value);}
    
/*************************************  Médecin   ************************************************ */
  private urlGetAllMedecins = 'http://localhost:8281/medecin/all';
  getAllMedecins(): Observable<Object> {
  return this.http.get(`${this.urlGetAllMedecins}`);}
    
  private urlGetMedecin = 'http://localhost:8281/medecin/getMedecin';
  getMedecin(id : number): Observable<number> {
  return this.http.get<number>(`${this.urlGetMedecin}/${id}`);}  

  private urlDeleteMedecin = 'http://localhost:8281/medecin/delecteMedecin';
  deleteMedecin(id : number): Observable<any> {
  return this.http.delete(`${this.urlDeleteMedecin}/${id}`);}
        
/****************************************** Patients ******************************************************/
  private urlGetAllPatients = 'http://localhost:8281/patient/all';
  getAllPatients(): Observable<Object> {
  return this.http.get(`${this.urlGetAllPatients}`);}

  private urlGetPatient= 'http://localhost:8281/patient/getPatient';
  getPatient(id : number): Observable<number> {
  return this.http.get<number>(`${this.urlGetPatient}/${id}`);}  

  private urlDeletePatient = 'http://localhost:8281/patient/deletPatient';
  deletePatient(id : number): Observable<any> {
  return this.http.delete(`${this.urlDeletePatient}/${id}`);}
  
  private urlGetPatientPArDateInscription = "http://localhost:8281/patient/allParDate" ;
  getAllPatientsByDateInscription(): Observable<any> {
    return this.http.get<any>(`${this.urlGetPatientPArDateInscription}`)
  }




  private urlGetNbrPatientCeMois="http://localhost:8281/patient/parMonth" ; 
  getNbrPatientCeMois(): Observable<number> {
    return this.http.get<number>(`${this.urlGetNbrPatientCeMois}`)
  }
  private urlGetNbrPatientCetteAnnee="http://localhost:8281/patient/parYear" ; 
  gtNbrPatientCetteAnnee(): Observable<number> {
    return this.http.get<number>(`${this.urlGetNbrPatientCetteAnnee}`)
  }
  private urlGetNbrPatientCetteSemaine="http://localhost:8281/patient/allParSemaine" ; 
  gtNbrPatientCetteSemaine(): Observable<number> {
    return this.http.get<number>(`${this.urlGetNbrPatientCetteSemaine}`)
  }
  private urlGetNbrPatientParMonth="http://localhost:8281/patient/patientParMonth?month=" ; 
  getNbrPatientParMonth(month : number): Observable<number> {
    return this.http.get<number>(`${this.urlGetNbrPatientParMonth+ month}`); }
  
  private urlGetMyennesAgesPatients="http://localhost:8281/patient/getMoyenneAgeParMonth?month=" ; 
  getMoyenneAgesPatientParMonth(month : number): Observable<number> {
    return this.http.get<number>(`${this.urlGetMyennesAgesPatients+ month}`); }
  
 /*************************************Secretaire *********************************************/
 private urlAddMedecinParAdmin= 'http://localhost:8281/adminMedical/addAdminMedicalParAdminDigitalSansImage/';
 addAdminMedicalParAdminDigital(value:any , id : number): Observable<any>{
 return this.http.post(`${this.urlAddMedecinParAdmin+id}`, value);}
 
  private urlGetAllSecretaires = 'http://localhost:8281/adminMedical/all';
  getAllSecretaires(): Observable<Object> {
  return this.http.get(`${this.urlGetAllSecretaires}`);}

  private urlGetSecretaire= 'http://localhost:8281/adminMedical/getAdminMedical';
  getSecretaire(id : number): Observable<number> {
  return this.http.get<number>(`${this.urlGetSecretaire}/${id}`);}  

  private urlDeleteSecretaire = 'http://localhost:8281/adminMedical/deletAdminMedical';
  deleteSecretaire(id : number): Observable<any> {
  return this.http.delete(`${this.urlDeleteSecretaire}/${id}`);}
 
  private urlUpdateAdminMedical= 'http://localhost:8281/adminMedical/update';
  updateAdminMedical(id: number, value: any ): Observable<any> {
  return this.http.put(`${this.urlUpdateAdminMedical}/${id}`, value);}

}
