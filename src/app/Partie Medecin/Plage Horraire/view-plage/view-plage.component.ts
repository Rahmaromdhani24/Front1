import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PlageHorraire } from 'src/app/Modeles/PlageHorraire';
import { PlageService } from 'src/app/Services/Medecin/Plage Horraire/plage.service';

@Component({
  selector: 'app-view-plage',
  templateUrl: './view-plage.component.html',
  styleUrls: ['./view-plage.component.css']
})
export class ViewPlageComponent implements OnInit {

  plages: PlageHorraire[] = [];
  constructor(private plageService:PlageService,private router:Router) { }
ngOnInit():void{
  this.refreshList();
 }
  set texte(a:string){
    this.plages=this.filtrer(a);
  }
  filtrer(a: string) {
    return this.plages.filter(x=>x.name.indexOf(a)!= -1);
  }
  addTask(f:NgForm):void{
    const name=f.value['name'];
    const duration=f.value['duration'];
    const startDate=f.value['startDate'];
    const endDate=f.value['endDate'];
    const val={name,duration,startDate,endDate};
    this.plageService.addPlage(val).subscribe({
      next:(res :any)=>{
        alert("Plage added successfully")
      },
      error:(res :any)=>{
        alert("invalid input")
      }
    })

  }
 
  refreshList():void{
    this.plageService.getPlage().subscribe(data =>{
      this.plages=data;
    
    } );
     }
  onDelete(id:number){
    this.plageService.deletePlage(id).subscribe({
  
      next:(res: any)=>{
      alert(" Plage Deleted successfully");
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
