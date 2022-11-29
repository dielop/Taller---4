import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  userURL = 'http://localhost:8080/';
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('sidenav') sidenav: MatSidenav ;

  // barra de navegacion
  Turnos = [ { name:"Turnos Reservados",
              url: "lista-turnos"}
           ];
  
  Pacientes = [ { name:"Listado Pacientes",
                  url: "lista" }
              ];

  Profesionales = [ { name:"Listado Profesionales",
                      url: "lista-profesionales"}
                  ];

  OS = [ { name:"Listado Obras Sociales",
           url: "lista-os"}
       ];

  Login = [{ name:"Cerrar sesion",
             url:"" }
          ];

  // declaracion de variables ...
  siExpandir = true;
  mostrarMenuTurnos: boolean = false;
  mostrarMenuPacientes: boolean = false;
  mostrarMenuProfesionales: boolean = false;
  mostrarMenuOS: boolean = false;

}
