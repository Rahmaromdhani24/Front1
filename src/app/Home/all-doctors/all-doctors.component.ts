import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  medecins = [
    { specialite: 'Cardiologie', nom: 'Collis Molate', image: '/assets/img/team1.jpg' },
    { specialite: 'Radiologie', nom: 'Collis Molate', image: '/assets/img/team2.jpg' },
    { specialite: 'Rhumatologie', nom: 'Collis Molate', image: '/assets/img/team3.jpg' },
    { specialite: 'Neurologie', nom: 'Collis Molate', image: '/assets/img/team4.jpg' },
    { specialite: 'Neurologie', nom: 'Collis Molate', image: '/assets/img/team1.jpg' },
    { specialite: 'Neurologie', nom: 'Collis Molate', image: '/assets/img/team2.jpg' },
    { specialite: 'Médecine générale', nom: 'Collis Molate', image: '/assets/img/team3.jpg' },
    { specialite: 'Médecine générale', nom: 'Collis Molate', image: '/assets/img/team4.jpg' },

    // Ajoutez d'autres médecins selon vos besoins
  ];
  departements = ['Médecine générale', 'Cardiologie','Gynécologie','Pédiatrie','Ophtalmologie',
    'Chirurgie générale','Orthopédie','Neurologie','Radiologie','Anesthésiologie','Oto-rhino-laryngologie (ORL)'];
  departementSelectionne: string = '';

  selectionnerDepartement(departement: string) {
    this.departementSelectionne = departement;
  }
  constructor() { }

  ngOnInit() {
   
  }

}
