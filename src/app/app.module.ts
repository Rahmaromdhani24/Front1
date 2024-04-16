import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { HomeAdminDigitalComponent } from './Admin Digital/home-admin-digital/home-admin-digital.component';
import { LoginAdminDigitalComponent } from './Admin Digital/login-admin-digital/login-admin-digital.component';
import { HomeSecretaireComponent } from './Admin Medical/home-secretaire/home-secretaire.component';
import { LoginSecretaireComponent } from './Admin Medical/login-secretaire/login-secretaire.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { AllDoctorsComponent } from './Home/all-doctors/all-doctors.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { PageNotFoundComponent } from './Home/page-not-found/page-not-found.component';
import { RendevousComponent } from './Home/rendevous/rendevous.component';
import { ServiceComponent } from './Home/service/service.component';
import { LoginMedecinComponent } from './Partie Medecin/login-medecin/login-medecin.component';
import { LoginPatientComponent } from './Partie Patient/login-patient/login-patient.component';
import { AllDepartementComponent } from './Admin Digital/Departement/all-departement/all-departement.component';
import { ModifierDepartementComponent } from './Admin Digital/Departement/modifier-departement/modifier-departement.component';
import { AddDepartementComponent } from './Admin Digital/Departement/add-departement/add-departement.component';
import { ProfileComponent } from './Admin Digital/profile/profile.component';
import { AllMedecinComponent } from './Admin Digital/Medecins/all-medecin/all-medecin.component';
import { AddMedecinComponent } from './Admin Digital/Medecins/add-medecin/add-medecin.component';
import { AllPatientComponent } from './Admin Digital/patients/all-patient/all-patient.component';
import { AddPatientComponent } from './Admin Digital/patients/add-patient/add-patient.component';
import { RendezVousComponent } from './Admin Digital/Rendezvous/rendez-vous/rendez-vous.component';
import { AllOperationsComponent } from './Admin Digital/Operations/all-operations/all-operations.component';
import { AllSecretaireComponent } from './Admin Digital/Secretaire/all-secretaire/all-secretaire.component';
import { AddSecretaireComponent } from './Admin Digital/Secretaire/add-secretaire/add-secretaire.component';
import { EditSecretaireComponent } from './Admin Digital/Secretaire/edit-secretaire/edit-secretaire.component';
import { HomeMedecinComponent } from './Partie Medecin/home-medecin/home-medecin.component';
import { ViewRendezVousComponent } from './Partie Medecin/view-rendez-vous/view-rendez-vous.component';
import { ViewMedecinComponent } from './Partie Medecin/view-medecin/view-medecin.component';
import { ViewPatientsComponent } from './Partie Medecin/view-patients/view-patients.component';
import { AddDossierComponent } from './Partie Medecin/Dossier Medical/add-dossier/add-dossier.component';
import { EditDossierComponent } from './Partie Medecin/Dossier Medical/edit-dossier/edit-dossier.component';
import { ViewDossierComponent } from './Partie Medecin/Dossier Medical/view-dossier/view-dossier.component';
import { AddPlageComponent } from './Partie Medecin/Plage Horraire/add-plage/add-plage.component';
import { EditPlageComponent } from './Partie Medecin/Plage Horraire/edit-plage/edit-plage.component';
import { ViewPlageComponent } from './Partie Medecin/Plage Horraire/view-plage/view-plage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeAdminDigitalComponent,
    LoginAdminDigitalComponent,
    HomeSecretaireComponent,
    LoginSecretaireComponent,
    AboutUsComponent,
    AllDoctorsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    RendevousComponent,
    ServiceComponent,
    LoginMedecinComponent,
    LoginPatientComponent,
    AllDepartementComponent,
    ModifierDepartementComponent,
    AddDepartementComponent,
    ProfileComponent,
    AllMedecinComponent,
    AddMedecinComponent,
    AllPatientComponent,
    AddPatientComponent,
    RendezVousComponent,
    AllOperationsComponent,
    AllSecretaireComponent,
    AddSecretaireComponent,
    EditSecretaireComponent,
    HomeMedecinComponent,
    ViewRendezVousComponent,
    ViewMedecinComponent,
    ViewPatientsComponent,
    AddDossierComponent,
    EditDossierComponent,
    ViewDossierComponent,
    AddPlageComponent,
    EditPlageComponent,
    ViewPlageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,

    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
