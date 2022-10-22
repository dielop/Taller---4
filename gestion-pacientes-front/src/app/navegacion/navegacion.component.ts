import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('sidenav') sidenav: MatSidenav ;

  Turnos = [ { name:"Turnos Reservados"}
           ];
  
  Pacientes = [ { name:"Listado Pacientes",
                  url: "lista" }
              ];

  Profesionales = [ { name:"Listado Profesionales"}
                  ];

  OS = [ { name:"Listado Obras Sociales"}
       ];

  siExpandir = true;
  mostrarMenuTurnos: boolean = false;
  mostrarMenuPacientes: boolean = false;
  mostrarMenuProfesionales: boolean = false;
  mostrarMenuOS: boolean = false;

}
