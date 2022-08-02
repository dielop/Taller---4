import { Component, Inject, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {

  public insertar:any;  
  
  constructor( public dialogRef: MatDialogRef<NuevoPacienteComponent>,
               @ Inject(MAT_DIALOG_DATA) public data: Paciente ) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }
}