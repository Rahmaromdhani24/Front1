import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/Modeles/medecin';
import { AdminDigitalService } from 'src/app/Services/Admin Digital/admin-digital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-medecin',
  templateUrl: './all-medecin.component.html',
  styleUrls: ['./all-medecin.component.css']
})
export class AllMedecinComponent implements OnInit {
  admin : any ; 
  adminConcecte : any ; 
  nomPrenomAdmin : string="";
  imagePath : string="";
  medecins: Medecin[] = [];
  medecinASupprimer : any ; 
  imageParDefaut ="./assets/icons/user1.png" ;
  MedecinsFinal : any =[] ; 

  public constructor(private service : AdminDigitalService , private router : Router ,
     private route : ActivatedRoute ) { }
  ngOnInit() {
    this.service.getAdminDigital(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
    this.admin=data;
    console.log( "Admin Connecte  ", this.admin.nom+" "+this.admin.prenom);
    this.nomPrenomAdmin = this.admin.nom+" "+this.admin.prenom; 
    if(this.admin.image ==null){
      this.imagePath="./assets/icons/user1.png";
      this.imageParDefaut="./assets/icons/user1.png" ;
    }
    else{
      this.imagePath="http://localhost:8281/adminDigital/getImageProfileAdminDigial/"+this.admin.id ; }});

      this.service.getAllMedecins().subscribe(data => {
        this.service.MedecinData =  data;
        this.service.testTabMedecins = this.service.MedecinData.length;
        console.log("les mdecins sont :"+this.service.MedecinData) ; 
      }) ; 
  }
  getAllMedecins(){
    this.service.getAllMedecins().subscribe(data=>{
    setTimeout(()=>{ }, 4000);
    this.service.MedecinData=data;})
    }
    supprimer(id :number){
      this.service.getMedecin(id).subscribe(data=>{
        this.medecinASupprimer = data
           
      Swal.fire({
        title: 'Êtes-vous sûr?',
        html: "de supprimer Ce Médecin  : <br>" +this.medecinASupprimer.prenom+" "+ this.medecinASupprimer.nom,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Annuler',
        confirmButtonText: 'Oui, supprimez-le!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.deleteMedecin(id).subscribe(()=>{this.getAllMedecins()
            console.log("ok")
          Swal.fire(
            'Supprimé !',
            'Médecin a été supprimé.',
            'success'
          ) }
          , err=>{
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-right',
              iconColor: 'white',
              background :'#f27474',
              customClass: {
                popup: 'colored-toast'
              },
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true
            })
            
             Toast.fire({
              icon: 'error',
              title: 'Error'
            })
          })
        }
        });
      });
    }
  
    formatDate(dateString: string): string {
      const date = new Date(dateString);
      return date.toISOString().slice(0, 10); // Format 'yyyy-mm-dd'
    } 
    logout() {
      localStorage.clear();
      this.router.navigate(['/accueil']);}

 openModal(){
  const modalDiv= document.getElementById('exampleModalCenter') ; 
  if(modalDiv !== null){
    modalDiv.style.display="block" ;
  }
 } 
 closeModal(){
  const modalDiv= document.getElementById('exampleModalCenter') ; 
  if(modalDiv !== null){
    modalDiv.style.display="none" ;
  }
 }  
   /*********************** recherche dans tab medecins *****************************************/
   set texte(chaine: string) {
    this.service.MedecinData = this.filtrer(chaine);}
 
  filtrer(sousChaine: string) {
    this.service.getAllMedecins().subscribe(data=>{
    this.MedecinsFinal=data;});     
    return this.MedecinsFinal.filter(e => e.gender.toLowerCase().includes(sousChaine.toLowerCase()) || 
                                          e.nom.toLowerCase().includes(sousChaine.toLowerCase()) ||
                                          e.prenom.toLowerCase().includes(sousChaine.toLowerCase()) ||
                                          e.telephone.toString().indexOf(sousChaine) != -1 ||
                                          e.date_inscription.toString().indexOf(sousChaine) != -1 ||
                                          e.cin === parseInt(sousChaine));}
    
/***************************************************************************************************/
}