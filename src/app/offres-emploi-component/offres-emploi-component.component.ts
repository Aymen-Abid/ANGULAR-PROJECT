import { Component, OnInit } from '@angular/core';
import {article} from "../../core/model/emploi";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  search='';
listeemploi : article[] =[
  { reference : "1", titre:"intgrateur",entreprise:"amazone",etat: false},
  { reference : "2", titre:"inginieur",entreprise:"meta",etat: true},
  { reference : "3", titre:"adminstrateur",entreprise:"esprit",etat: true},
  { reference : "4", titre:"support",entreprise:"cofib",etat: false}] ;
  constructor() { }

  ngOnInit(): void {
  }
  bilan() {
    const nonCloturees = this.listeemploi.filter(emploi => emploi.etat === true).length;
    alert(`Il y a ${nonCloturees} offres d'emploi non clôturées.`);
  }
}
