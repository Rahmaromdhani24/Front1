import { Component, ElementRef , ViewChild  , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialite } from 'src/app/Modeles/specialite';
import { AdminDigitalService } from 'src/app/Services/Admin Digital/admin-digital.service';
import { DepartementService } from 'src/app/Services/Departement/departement.service';
import { ModalService } from 'src/app/Services/Modal/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-departement',
  templateUrl: './all-departement.component.html',
  styleUrls: ['./all-departement.component.css']
})
export class AllDepartementComponent implements OnInit {
  currentPage: number;
  totalPages: number;
  pages: number[] = [];  admin : any ; 
  adminConcecte : any ; 
  nomPrenomAdmin : string="";
  imagePath : string="";
  specialites: Specialite[] = [];
  pageSize = 10;
  departementASupprimer : any
  allDepartements :any = [];
  DepartementsFinal:any = [];
  resultt : any

  public constructor(private service : AdminDigitalService ,private serviceDepartement: DepartementService, 
    private router : Router , private route : ActivatedRoute,private modalService: ModalService) { }
  ngOnInit() {
    this.service.getAdminDigital(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
    this.admin=data;
    console.log( "Admin Connecte  ", this.admin.nom+" "+this.admin.prenom);
    this.nomPrenomAdmin = this.admin.nom+" "+this.admin.prenom; 
    if(this.admin.image ==null){
      this.imagePath="./assets/icons/user1.png"
    }
    else{
      this.imagePath="http://localhost:8281/adminDigital/getImageProfileAdminDigial/"+this.admin.id ; }});

    this.serviceDepartement.getAllDepartements().subscribe(data => {
    this.service.DepartementData = data;
});
//this.getAllDepartement();
this.route.paramMap.subscribe(params => {
  // Extraire le numéro de page de l'URL
  this.currentPage = parseInt(params.get('page'),10) || 1;
  
  // Charger les données pour la page actuelle
  //this.loadData();
  this.getAllDepartement();
});
  }
  loadData() {
    // Appeler la méthode de votre service pour récupérer tous les départements
    this.service.getAllDepartement().subscribe(
      (data: any[]) => {
        // Supposons que les données retournées incluent toutes les données de tous les départements
        // Vous devrez implémenter la logique de pagination côté serveur pour renvoyer uniquement les données pour la page actuelle
        // Pour cet exemple, nous allons simplement simuler la pagination côté client
        const pageSize = 5; // Supposons que vous affichez 10 départements par page
        this.totalPages = Math.ceil(data.length / pageSize);
        this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);

        const startIndex = (this.currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        this.service.DepartementData = data.slice(startIndex, endIndex);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des données : ', error);
        // Gérer les erreurs ici
      }
    );
  }
  navigateToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      // Naviguer vers la route avec le numéro de page
      this.router.navigate(['/allDepartements', page]);
    }
  }

  getAllDepartement(){
    this.service.getAllDepartement().subscribe(data=>{
    setTimeout(()=>{ }, 4000);
    this.service.DepartementData=data;})
    }
  supprimer(id :number){
    this.service.getDepartement(id).subscribe(data=>{
      this.departementASupprimer = data
         
    Swal.fire({
      title: 'Êtes-vous sûr?',
      html: "de supprimer Ce Département  : <br>" +this.departementASupprimer.nom,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteDepartement(id).subscribe(()=>{this.getAllDepartement()
          console.log("ok")
        Swal.fire(
          'Supprimé !',
          'Département a été supprimé.',
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

  /*********************** recherche par nom departements *****************************************/
  set texte(chaine: string) {
    this.service.DepartementData = this.filtrer(chaine);
    console.log("ggjbn", this.filtrer(chaine))
  //}
  }
  filtrer(sousChaine: string) {
    this.service.getAllDepartement().subscribe(data=>{
    this.DepartementsFinal=data;});     
    return this.DepartementsFinal.filter(e => e.nom.toLowerCase().includes(sousChaine.toLowerCase()));}

/***************************************************************************************************/
sauvegarder(f:NgForm){
  let nom = f.value.nom ; 
  let value={nom};
  this.service.addDepartement(value).subscribe(()=>{
  console.log("hiiiiiiiiiiiiiiiiiiii",f.value.nom)
  this.closeModal() ;
  this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  this.router.navigate(['allDepartements']);});
    
  }, err=>{
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Ce Département déjà existe   !!!!",
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
logout() {
  localStorage.clear();
  this.router.navigate(['/accueil']);

}
}  