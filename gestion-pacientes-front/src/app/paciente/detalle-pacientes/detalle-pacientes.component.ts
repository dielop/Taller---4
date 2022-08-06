import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-detalle-pacientes',
  templateUrl: './detalle-pacientes.component.html',
  styleUrls: ['./detalle-pacientes.component.css']
})
export class DetallePacientesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetallePacientesComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Paciente) { }

  ngOnInit(): void {
  }

  volver(){
    this.dialogRef.close();
  }

}
