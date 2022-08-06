import { Component, Inject, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/service/paciente.service';
import { DetallePacientesComponent } from '../detalle-pacientes/detalle-pacientes.component';
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

  @ViewChild(MatTable) tabla: MatTable<Paciente>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor( private pacienteService: PacienteService,
               public dialog:MatDialog,
               private toast: NgToastService,
               private router: Router,
               private changeDetectorRefs: ChangeDetectorRef,
               private activatedRoute: ActivatedRoute) { }

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

  eliminarPaciente(id : number){
    this.pacienteService.delete(id).subscribe(
      {
        next:data => {
         this.toast.success({detail:"Mensaje exitoso", summary:"Paciente eliminado con exito", duration:3000}); 
        },
        error:err => {
         this.toast.error({detail:"Mensaje de Error", summary: "No se pudo eliminar el paciente", duration:3000});        
       }
      }
    );     
  }

  // Ventana modal para crear paciente

  openDialog(){
    let dialogRef = this.dialog.open(NuevoPacienteComponent, {
      data: new Paciente( '',
                          '',
                          '',
                          '',
                          '',
                          '' )
    });

    dialogRef.afterClosed().subscribe(pac => {
          if (pac != undefined)
          this.onCreate(pac);
    });
  }

  // Metodo que crea paciente luego de cerrar la ventana Modal y actualizo filas
  onCreate(pac:Paciente): void {
  const paciente = new Paciente(  pac.dni,
                                  pac.nombre,
                                  pac.apellido,
                                  pac.localidad,
                                  pac.direccion,
                                  pac.telefono );

  this.pacienteService.save(paciente).subscribe(
    {
        next:data => {
          this.toast.success({detail:"Mensaje exitoso", summary:"Paciente creado con exito", duration:3000})      
          this.router.navigate(['/']);
        },
        error:err => {
          this.toast.error({detail:"Mensaje de Error", summary: "Error al crear paciente", duration:3000})        
          this.router.navigate(['/']);
        }
    });
  }

  // Ventana modal para modificar paciente
  //modificarPaciente(pac:Paciente): void {
    
  //}


  // Ventana modal para ver paciente
  
  dialogPaciente(){
    //const id = this.activatedRoute.snapshot.params.id;
    this.dialog.open(DetallePacientesComponent);
  }

  // verPaciente(id:number){
  //   const id = this.activatedRoute.snapshot.params.id;
  //   this.pacienteService.detail(id).subscribe({
  //     data => {
  //       this.paciente = data;
  //     }
  //   })
  //   }

  // }
 

  //refresh(){
   // modificarPaciente(dni: string){
   //   alert('Modificar el paciente DNI: ' + dni);
    //}
  //  
  //}
}
