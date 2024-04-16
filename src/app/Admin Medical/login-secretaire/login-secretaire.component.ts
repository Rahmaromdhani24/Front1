import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMedicalService } from 'src/app/Services/Admin Medical/admin-medical.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-secretaire',
  templateUrl: './login-secretaire.component.html',
  styleUrls: ['./login-secretaire.component.css']
})
export class LoginSecretaireComponent implements OnInit {

  admin : any
  result : any
  public constructor(private service : AdminMedicalService , private router : Router , private route : ActivatedRoute) { }
  password: string = '';
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  ngOnInit() {
    this.router.navigate(['/secretaire'] , {relativeTo: this.route} );
    this.service.islogin = false;
    this.service.admin = false;
  
}
    login(f:NgForm){ 
    this.service.login(f.value.username, f.value.password).subscribe(data=>{
      this.admin = data;
     this.service.getAdminMedical(this.admin.id).subscribe(data=>{
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
      if(this.result.role === "Admin Medical Manager"){ this.router.navigate(['/homeAdminMedical']);}
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

    