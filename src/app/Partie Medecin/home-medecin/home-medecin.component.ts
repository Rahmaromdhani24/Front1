import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-medecin',
  templateUrl: './home-medecin.component.html',
  styleUrls: ['./home-medecin.component.css']
})
export class HomeMedecinComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/accueil']);
   
  }
}
