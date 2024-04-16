import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDigitalService } from 'src/app/Services/Admin Digital/admin-digital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin-digital',
  templateUrl: './login-admin-digital.component.html',
  styleUrls: ['./login-admin-digital.component.css']
})
export class LoginAdminDigitalComponent implements OnInit {

  admin : any
  result : any ; 
  public constructor(private service : AdminDigitalService , private router : Router ) { }

  ngOnInit() {
   

}
login(f:NgForm){ 
  this.service.login(f.value.username, f.value.password).subscribe(data=>{
    this.admin = data;
   this.service.getAdminDigital(this.admin.id).subscribe(data=>{
    this.result = data;
    console.log(this.result);
    localStorage.setItem("Username:", this.result.username);//kn name
    localStorage.setItem("Role:", this.result.role);
    localStorage.setItem("Email", this.result.email);
    localStorage.setItem("idAdmin", this.result.id);
    localStorage.setItem('AdminConnecte', this.result.nom+" "+this.result.prenom);  
    let accessToken = "Bearer" + this.admin.accessToken;
    localStorage.setItem("token", accessToken);
    this.service.islogin = true;
    this.service.admin = true;
    if(this.result.role === "Admin Digital Manager"){ this.router.navigate(['/homeDigitalMedical']);}
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

  