import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/service/paciente.service';
import { NuevoPacienteComponent } from '../nuevo-paciente/nuevo-paciente.component';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  displayedColumns = ['DNI', 'Nombre', 'Apellido','Telefono','Acciones'];
  dataSource = new MatTableDataSource<Paciente>(this.pacientes) 

  @ViewChild(MatTable) tabla1!: MatTable<Paciente>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor( private pacienteService: PacienteService,
               public dialog:MatDialog,
               private toast: NgToastService,
               private router: Router ) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
       const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarPacientes(): void {
     this.pacienteService.lista().subscribe(
       {
         next:report => {
          this.dataSource.data = report as Paciente[];
         },
         error:err => {
           console.log(err);
         }
       }
     );
  }

  borrar(id: number){
    this.pacienteService.delete(id).subscribe(
      {
        next:data => {
         this.toast.success({detail:"Mensaje exitoso", summary:"Paciente eliminado con exito", duration:3000});
         this.cargarPacientes(); 
        },
        error:err => {
         this.toast.error({detail:"Mensaje de Error", summary: err.error.mensaje, duration:3000});        
       }
      }
    );
  }

  modificar(DNI: number){
    alert('Modificar el paciente DNI: ' + DNI);
  }

  openDialog(){
    let dialogRef = this.dialog.open(NuevoPacienteComponent, {
      data: new Paciente( '',
                          '',
                          '',
                          '',
                          '',
                          '' )
    });
    console.log("Adentro");
    dialogRef.afterClosed().subscribe(pac => {
          if (pac != undefined)
          this.onCreate(pac);
    });
  }

  onCreate(pac:Paciente): void {
  const paciente = new Paciente(  pac.dni,
                                  pac.nombre,
                                  pac.apellido,
                                  pac.localidad,
                                  pac.direccion,
                                  pac.telefono );
    console.log(paciente);
  this.pacienteService.save(paciente).subscribe(
    {
        next:data => {
          this.toast.success({detail:"Mensaje exitoso", summary:"Paciente creado con exito", duration:3000})      
          this.router.navigate(['/']);
        },
        error:err => {
          this.toast.error({detail:"Mensaje de Error", summary: err.error.mensaje, duration:3000})        
          this.router.navigate(['/']);
        }
    });
    this.tabla1.renderRows();
  }
}
