import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/Modeles/medecin';
import { MedecinService } from 'src/app/Services/Medecin/medecin.service';

@Component({
  selector: 'app-view-medecin',
  templateUrl: './view-medecin.component.html',
  styleUrls: ['./view-medecin.component.css']
})
export class ViewMedecinComponent implements OnInit {

  medecins:Medecin[]=[];
  imageParDefaut : string='';
 constructor(private MedecinService:MedecinService,private router:Router){}

ngOnInit(): void {
    this.refreshList();
    this.imageParDefaut="./assets/icons/user1.png" ;

}
set texte(a:string){
  this.medecins=this.filtrer(a);
}
filtrer(a: string) {
  return this.medecins.filter(x=>x.nom.indexOf(a)!= -1);
}
refreshList(){
  this.MedecinService.getMedecin().subscribe(data =>{
    this.medecins=data;
  } );
   }
   logout() {
    localStorage.clear();
    this.router.navigate(['/accueil']);
   
  }
}