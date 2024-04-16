import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Modeles/patient';
import { PatientService } from 'src/app/Services/Medecin/patient/patient.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {

  patients:Patient[]=[];
  constructor(private PatientService:PatientService,private router:Router){}
 
 ngOnInit(): void {
     this. refreshList();
 }
 set texte(a:string){
   this.patients=this.filtrer(a);
 }
 filtrer(a: string) {
   return this.patients.filter(x=>x.nom.indexOf(a)!= -1);
 }
 refreshList(){
   this.PatientService.getPatient().subscribe(data =>{
     this.patients=data;
   } );
    }
 onDelete(id:number){
   this.PatientService.deletePatient(id).subscribe({
 
     next:(res: any)=>{
     alert("Patient Deleted successfully");
     this.refreshList();
     },
     error:(res: any)=>{
     alert("error");
     },
     })
 }
 formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().slice(0, 10); // Format 'yyyy-mm-dd'
} 
 logout() {
  localStorage.clear();
  this.router.navigate(['/accueil']);
 
}
}