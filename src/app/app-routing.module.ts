import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { LoginAdminDigitalComponent } from './Admin Digital/login-admin-digital/login-admin-digital.component';
import { HomeSecretaireComponent } from './Admin Medical/home-secretaire/home-secretaire.component';
import { LoginSecretaireComponent } from './Admin Medical/login-secretaire/login-secretaire.component';
import { HomeAdminDigitalComponent } from './Admin Digital/home-admin-digital/home-admin-digital.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { AllDoctorsComponent } from './Home/all-doctors/all-doctors.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { ServiceComponent } from './Home/service/service.component';
import { RendevousComponent } from './Home/rendevous/rendevous.component';
import { LoginMedecinComponent } from './Partie Medecin/login-medecin/login-medecin.component';
import { LoginPatientComponent } from './Partie Patient/login-patient/login-patient.component';
import { PageNotFoundComponent } from './Home/page-not-found/page-not-found.component';
import { AllDepartementComponent } from './Admin Digital/Departement/all-departement/all-departement.component';
import { ProfileComponent } from './Admin Digital/profile/profile.component';
import { AllMedecinComponent } from './Admin Digital/Medecins/all-medecin/all-medecin.component';
import { AddMedecinComponent } from './Admin Digital/Medecins/add-medecin/add-medecin.component';
import { AllPatientComponent } from './Admin Digital/patients/all-patient/all-patient.component';
import { AddPatientComponent } from './Admin Digital/patients/add-patient/add-patient.component';
import { RendezVousComponent } from './Admin Digital/Rendezvous/rendez-vous/rendez-vous.component';
import { AllOperationsComponent } from './Admin Digital/Operations/all-operations/all-operations.component';
import { AllSecretaireComponent } from './Admin Digital/Secretaire/all-secretaire/all-secretaire.component';
import { HomeMedecinComponent } from './Partie Medecin/home-medecin/home-medecin.component';
import { ViewRendezVousComponent } from './Partie Medecin/view-rendez-vous/view-rendez-vous.component';
import { ViewMedecinComponent } from './Partie Medecin/view-medecin/view-medecin.component';
import { ViewPatientsComponent } from './Partie Medecin/view-patients/view-patients.component';
import { AddDossierComponent } from './Partie Medecin/Dossier Medical/add-dossier/add-dossier.component';
import { ViewDossierComponent } from './Partie Medecin/Dossier Medical/view-dossier/view-dossier.component';
import { EditDossierComponent } from './Partie Medecin/Dossier Medical/edit-dossier/edit-dossier.component';
import { AddPlageComponent } from './Partie Medecin/Plage Horraire/add-plage/add-plage.component';
import { EditPlageComponent } from './Partie Medecin/Plage Horraire/edit-plage/edit-plage.component';
import { ViewPlageComponent } from './Partie Medecin/Plage Horraire/view-plage/view-plage.component';


const routes: Routes = [
  /******************************** Entrer site web ***********************************************/
  {path:"" , component:HomePageComponent },
  {path:"accueil" , component:HomePageComponent },
  {path:"aboutUs" , component:AboutUsComponent },
  {path:"medecin" , component:AllDoctorsComponent },
  {path:"contact" , component:ContactUsComponent },
  {path:"service" , component:ServiceComponent },
  {path:"rendevous" , component:RendevousComponent },
  /******************************** Admin Digital Manager ******************************************/
  {path:"admin" , component:LoginAdminDigitalComponent },
  {path:"homeDigitalMedical",component:HomeAdminDigitalComponent },
  {path:"allDepartements",component:AllDepartementComponent },
  {path:"allDepartements/:page", component: AllDepartementComponent }, // Route avec le paramètre de page
  {path:"profileAD",component:ProfileComponent },
  {path:"medecins",component:AllMedecinComponent },
  {path:"addMedecin",component:AddMedecinComponent },
  {path:"patients",component:AllPatientComponent },
  {path:"addPatient",component:AddPatientComponent },
  {path:"rendezVous",component:RendezVousComponent },
  {path:"operations",component:AllOperationsComponent },
  {path:"secretaires",component:AllSecretaireComponent },

  /******************************** Admin Medical Manager  *****************************************/
  {path:"secretaire" , component:LoginSecretaireComponent },
  {path:"homeAdminMedical" , component:HomeSecretaireComponent},
    /******************************** Medecin  *****************************************/
  {path:"p_medecin" , component:LoginMedecinComponent},
    /******************************** Patient  *****************************************/
  {path:"p_patient" , component:LoginPatientComponent },







  /***************************************Partie nihelllllll ******************************************/
  {path:"homeMedecin" , component:HomeMedecinComponent },
  {path:"addDossier",component:AddDossierComponent},
  {path:"viewDossier",component:ViewDossierComponent},
  {path:"editDossier",component:EditDossierComponent},
  {path:"viewMedecin",component:ViewMedecinComponent},
  {path:"view-patient",component:ViewPatientsComponent},
  {path:"add-plage",component:AddPlageComponent},
  {path:"edit-plage",component:EditPlageComponent},
  {path:"view-plage",component:ViewPlageComponent},
  { path:"viewRendez",component:ViewRendezVousComponent},




  {path:"" , redirectTo:"/accueil",pathMatch:'full'},
  {path:"**" , component:PageNotFoundComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
