import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.css']
})
export class EditarPacientesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditarPacientesComponent>,
                                @ Inject(MAT_DIALOG_DATA) public data: Paciente ) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }

}
