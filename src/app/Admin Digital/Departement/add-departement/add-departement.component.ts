import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/Modal/modal.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.showModal$.subscribe(show => {
      if (show) {
        this.openModal();
      }
    });
  }

  openModal() {
    // Code pour ouvrir le modal d'ajout
  }
}
