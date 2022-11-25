import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.css']
})

export class EditarPacientesComponent implements OnInit {

  paciente : Paciente = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Paciente,
              public dialogRef: MatDialogRef<EditarPacientesComponent>) { }

ngOnInit(): void {
}

cancelar() : void{
  this.dialogRef.close();
}

}
