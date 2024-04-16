import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/Modeles/medecin';
import { AdminDigitalService } from 'src/app/Services/Admin Digital/admin-digital.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-secretaire',
  templateUrl: './all-secretaire.component.html',
  styleUrls: ['./all-secretaire.component.css']
})
export class AllSecretaireComponent implements OnInit {
  nom :any ; prenom : any;email : any ; cin : any ; telephone : any ; 
  admin : any ; 
  adminConcecte : any ; 
  nomPrenomAdmin : string="";
  imagePath : string="";
  medecins: Medecin[] = [];
  secretaireASupprimer : any ; 
  imageParDefaut ="./assets/icons/user1.png" ;
  SecretairesFinal :any = [];
  testImage : any ; 
  user: any = {};
  gender : any ;
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

      this.service.getAllSecretaires().subscribe(data => {
        this.service.SecretairesData =  data;
        this.service.testTabSecretaires = this.service.SecretairesData.length;
        console.log("les mdecins sont :"+this.service.SecretairesData) ; 
      }) ; 
     
  }
  getAllSecretaires(){
    this.service.getAllSecretaires().subscribe(data=>{
    setTimeout(()=>{ }, 4000);
    this.service.SecretairesData=data;})
    }
    supprimer(id :number){
      this.service.getSecretaire(id).subscribe(data=>{
        this.secretaireASupprimer = data
           
      Swal.fire({
        title: 'Êtes-vous sûr?',
        html: "de supprimer Ce Médecin  : <br>" +this.secretaireASupprimer.prenom+" "+ this.secretaireASupprimer.nom,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Annuler',
        confirmButtonText: 'Oui, supprimez-le!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.deleteSecretaire(id).subscribe(()=>{this.getAllSecretaires()
            console.log("ok")
          Swal.fire(
            'Supprimé !',
            'Secrétaire médicala été supprimé.',
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
  /*********************** recherche dans tab secretaires *****************************************/
  set texte(chaine: string) {
    this.service.SecretairesData = this.filtrer(chaine);}
 
  filtrer(sousChaine: string) {
    this.service.getAllSecretaires().subscribe(data=>{
    this.SecretairesFinal=data;});     
    return this.SecretairesFinal.filter(e => e.gender.toLowerCase().includes(sousChaine.toLowerCase()) || 
                                        e.nom.toLowerCase().includes(sousChaine.toLowerCase()) ||
                                        e.prenom.toLowerCase().includes(sousChaine.toLowerCase()) ||
                                        e.cin === parseInt(sousChaine));}
    
/***************************************************************************************************/
sauvegarderrr(fAdd:NgForm){
  let cin = fAdd.value.cin ;
  let nom = fAdd.value.name ;
  let prenom = fAdd.value.namee ;
  let email = fAdd.value.email ;
  let gender = fAdd.value.gender; 
  let telephone = fAdd.value.telephone; 
  let value={nom , prenom , gender , email  , cin , telephone};
  localStorage.setItem('test' ,nom )
  this.service.addAdminMedicalParAdminDigital(value ,parseInt(localStorage.getItem('idAdmin'))).subscribe(()=>{
  console.log("hiiiiiiiiiiiiiiiiiiii",value)
  this.ngOnInit();
  this.closeModal() ; 
  this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  this.router.navigate(['secretaires']);
});
    
  }, err=>{
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Numéro de CIN ou adresse email existe déjà   !!!!",
      showConfirmButton: true,
      timer: 10000
    });
  });
}
closeModal() {
  const modalDiv= document.getElementById('exampleModalCenter') ; 
  if (modalDiv) {
    modalDiv.classList.remove('show');
    modalDiv.style.display = 'none';
    const backdropElement = document.getElementsByClassName('modal-backdrop')[0];
    if (backdropElement) {
      backdropElement.parentNode.removeChild(backdropElement);
    }
  }
}
closeModal2() {
  const modalDiv= document.getElementById('exampleModalCenter2') ; 
  if (modalDiv) {
    modalDiv.classList.remove('show');
    modalDiv.style.display = 'none';
    const backdropElement = document.getElementsByClassName('modal-backdrop')[0];
    if (backdropElement) {
      backdropElement.parentNode.removeChild(backdropElement);
    }
  }
}

modifierrr(f:NgForm){
  let id= f.value.id ; 
  let cin = f.value.cin ;
  let nom = f.value.nom ;
  let prenom = f.value.prenom ;
  let email = f.value.email ;
  let gender = f.value.gender; 
  let telephone = f.value.telephone; 
  let value={nom , prenom , gender , email  , cin , };
  this.service.updateAdminMedical(this.user.id, value ).subscribe(()=>{
  console.log("hiiiiiiiiiiiiiiiiiiii",f.value)
  localStorage.removeItem('idAdminMedicalAModifier') ; 
  this.closeModal2() ;
  this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  this.router.navigate(['secretaires']);});
    
  }, err=>{
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Numéro de CIN ou adresse email existe déjà   !!!!",
      showConfirmButton: true,
      timer: 10000
    });
  });
}
openModelEdit(id : number){
  /********  Open modal  *********/
  const modalDiv = document.getElementById('exampleModalCenter2');
if (modalDiv) {
  modalDiv.classList.add('show');
  modalDiv.style.display = 'block'; // Assurez-vous que le modal est affiché
  const backdropElement = document.createElement('div');
  backdropElement.classList.add('modal-backdrop', 'fade', 'show');
  document.body.appendChild(backdropElement);
}
  /************************* Recupere medecin a modifie ***************************/
  this.service.getSecretaire(id).subscribe(data => {
    if (data) {
      this.user = data;
      localStorage.setItem("idAdminMedicalAModifier:", this.user.id);
      this.gender = this.user.gender;
                   
}}) ;
}
}
