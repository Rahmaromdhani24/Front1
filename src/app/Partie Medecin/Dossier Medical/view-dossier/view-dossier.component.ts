import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DossierMedical } from 'src/app/Modeles/DossierMedecial';
import { DossierService } from 'src/app/Services/Medecin/Dossier Medical/dossier.service';

@Component({
  selector: 'app-view-dossier',
  templateUrl: './view-dossier.component.html',
  styleUrls: ['./view-dossier.component.css']
})
export class ViewDossierComponent implements OnInit {

  dossiers:DossierMedical[] =[];
  constructor(private dossierService:DossierService,private router:Router){}
  ngOnInit():void{
    this.refreshList();
  }
  
  set texte(a:string){
    this.dossiers=this.filtrer(a);
  }
  filtrer(a: string) {
    return this.dossiers.filter(x => x.idDossier.toString().indexOf(a) !== -1);
}


refreshList(){
  this.dossierService.getDossier().subscribe(data =>{
    this.dossiers=data;
  } );
   }
   onDelete(id:number){
    this.dossierService.deleteDossier(id).subscribe({

      next:(res: any)=>{
      alert("Dossier Deleted successfully");
      this.refreshList();
      },
      error:(res: any)=>{
      alert("error");
      },
      })
   }
   onEdit(id:number){
    this.router.navigateByUrl(`/update/${id}`);
   }
   logout() {
    localStorage.clear();
    this.router.navigate(['/accueil']);
   
  }
}
