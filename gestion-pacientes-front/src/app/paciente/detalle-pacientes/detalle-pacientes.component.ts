import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-detalle-pacientes',
  templateUrl: './detalle-pacientes.component.html',
  styleUrls: ['./detalle-pacientes.component.css']
})
export class DetallePacientesComponent implements OnInit {

  paciente: Paciente = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Paciente,
  public dialogRef: MatDialogRef<DetallePacientesComponent>) { }

  ngOnInit(): void {
    
  }

  // cierre de ventana modal...
  cancelar() : void{
    this.dialogRef.close();
  }
  

}