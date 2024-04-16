import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMedicalService } from 'src/app/Services/Admin Medical/admin-medical.service';

@Component({
  selector: 'app-home-secretaire',
  templateUrl: './home-secretaire.component.html',
  styleUrls: ['./home-secretaire.component.css']
})
export class HomeSecretaireComponent implements OnInit {
 
  admin : any ; 
  adminConcecte : any ; 
  nomPrenomAdmin : string="";
  imagePath : string="";
  public constructor(private service : AdminMedicalService , private router : Router , private route : ActivatedRoute) { }
  ngOnInit() {
    this.service.getAdminMedical(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
    this.admin=data;
    console.log( "Admin Connecte  ", this.admin.nom+" "+this.admin.prenom);
    this.nomPrenomAdmin = this.admin.nom+" "+this.admin.prenom; 
    if(this.admin.image ==null){
      this.imagePath="./assets/icons/user1.png"
    }
    else{
      this.imagePath="http://localhost:8281/adminMedical/getImageProfileAdminMedical/"+this.admin.id ; }

  });
  }


  getAdminMedicalConnecte(){
    let idAdminString: string | null = localStorage.getItem("idAdmin:");
    let idAdminDigital: number = idAdminString ? parseInt(idAdminString) : 0;
    this.service.getAdminMedical(idAdminDigital).subscribe(data=>{
    this.admin=data;
    console.log( "Admin Connecte  ", this.admin.nom+" "+this.admin.prenom);
    this.nomPrenomAdmin = localStorage.getItem('AdminConnecte') || ""; 

  });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
    /*localStorage.removeItem('Username:');
    localStorage.removeItem('Role:');
    localStorage.removeItem('Email');
    localStorage.removeItem('idAdmin');
    localStorage.removeItem('token');
    this.service.islogin = false;
    this.router.navigate(['']);
    window.localStorage.clear();*/
      //location.reload();
  }
}