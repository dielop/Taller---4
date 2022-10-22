import { Component, OnInit } from '@angular/core';
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

  constructor(private toast: NgToastService,
              private activatedRoute: ActivatedRoute,
              private pacienteService: PacienteService,
              private router: Router) { }

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['id'];
    this.pacienteService.getPatientDetailById(id).subscribe({
      next: data => {
          this.paciente = data;
      }, 
      error: err => {
      this.toast.error({detail:"Mensaje de Error", summary: "No se pudo ver el paciente", duration:3000});
      this.router.navigate(['/']);
      }
    });
}

onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.pacienteService.update(id, this.paciente).subscribe(
      {
        next:data => {
          this.toast.success({detail:"Mensaje exitoso", summary:"Paciente actualizado con exito", duration:3000})      
          this.router.navigate(['/']);
        },
        error:err => {
          this.toast.error({detail:"Mensaje de Error", summary: "Error al editar el paciente", duration:3000})        
          this.router.navigate(['/']);
        }
    });
  }

  cancelar() : void{
    this.router.navigate(['/']);
  }

}
