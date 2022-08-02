import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav ;

  Turnos = [ { name:"Turnos Reservados"}
           ];
  
  Pacientes = [ { name:"Listado Pacientes",
                  url: "/lista" }
              ];

  Profesionales = [ { name:"Listado Profesionales"}
                  ];

  OS = [ { name:"Listado Obras Sociales"}
       ];


  title = 'gestion-pacientes';
  
  siExpandir = true;
  mostrarMenuTurnos: boolean = false;
  mostrarMenuPacientes: boolean = false;
  mostrarMenuProfesionales: boolean = false;
  mostrarMenuOS: boolean = false;
}
