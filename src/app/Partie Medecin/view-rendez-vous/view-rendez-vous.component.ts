import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/app/Modeles/Rendez-Vous';
import { RendezVousService } from 'src/app/Services/Medecin/Rendez-vous/rendez-vous.service';

@Component({
  selector: 'app-view-rendez-vous',
  templateUrl: './view-rendez-vous.component.html',
  styleUrls: ['./view-rendez-vous.component.css']
})
export class ViewRendezVousComponent implements OnInit {
ngOnInit(): void {
    
}
  rendez:RendezVous[]=[];
  constructor(private RendezService:RendezVousService,private router:Router){}
 Imprimer():void{
   window.print();
 }
 
 set texte(a:string){
   this.rendez=this.filtrer(a);
 }
 filtrer(a: string) {
   return this.rendez.filter(x=>x.Nom.indexOf(a)!= -1);
 }
 refreshList(){
   this.RendezService.getRendez().subscribe(data =>{
     this.rendez=data;
   } );
    }
 onDelete(id:number){
   this.RendezService.deleteRendez(id).subscribe({
 
     next:(res: any)=>{
     alert("Rendez-Vous Deleted successfully");
     this.refreshList();
     },
     error:(res: any)=>{
     alert("error");
     },
     })
 }
 logout() {
  localStorage.clear();
  this.router.navigate(['/accueil']);
 
}
 }
 