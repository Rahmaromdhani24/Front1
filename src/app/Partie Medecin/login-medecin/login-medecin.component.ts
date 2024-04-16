import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedecinService } from 'src/app/Services/Medecin/medecin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-medecin',
  templateUrl: './login-medecin.component.html',
  styleUrls: ['./login-medecin.component.css']
})
export class LoginMedecinComponent implements OnInit {

  medecin : any
  result : any ; 
  public constructor(private service : MedecinService , private router : Router ) { }

  ngOnInit() {
   

}
login(f:NgForm){ 
  this.service.login(f.value.username, f.value.password).subscribe(data=>{
    this.medecin = data;
   this.service.getMedecinById(this.medecin.id).subscribe(data=>{
    this.result = data;
    console.log(this.result);
    localStorage.setItem("Username:", this.result.username);//kn name
    localStorage.setItem("Role:", this.result.role);
    localStorage.setItem("Email", this.result.email);
    localStorage.setItem("idMedecin", this.result.id);
    localStorage.setItem('MedecinConnecte', this.result.nom+" "+this.result.prenom);  
    let accessToken = "Bearer" + this.medecin.accessToken;
    localStorage.setItem("token", accessToken);

    if(this.result.role === "Medecin"){ this.router.navigate(['/homeMedecin']);}
    else{
      console.log("error")
      Swal.fire({
        icon:"error",
        title: 'Vérifier votre identifiant et votre  mot de passe  !!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'}})}} 
    ,err=>{
  
      Swal.fire({
        icon:"error",
        title: 'Vérifier votre identifiant et votre  mot de passe  !!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })  
    //this.invalidLogin = true
    });
    }
    ,err=>{
  
      Swal.fire({
        icon:"error",
        title: 'Vérifier votre identifiant et votre  mot de passe  !!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })  
    //this.invalidLogin = true
    });
    }
  }
