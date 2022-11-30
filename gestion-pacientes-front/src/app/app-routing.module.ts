import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './login/user/user.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ListaOsComponent } from './obrasSociales/lista-os/lista-os.component';
import { DetallePacientesComponent } from './paciente/detalle-pacientes/detalle-pacientes.component';
import { EditarPacientesComponent } from './paciente/editar-pacientes/editar-pacientes.component';
import { ListaPacientesComponent } from './paciente/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente/nuevo-paciente.component';
import { ListaProfesionalesComponent } from './profesionales/lista-profesionales/lista-profesionales.component';
import { ListaTurnosComponent } from './turnos/lista-turnos/lista-turnos.component';

const routes: Routes = [

  { path: '', component: UserComponent },
  { path: 'user', component: UserComponent },
  {
    path: 'navigation', component: NavegacionComponent,
    children: [
      { path: 'lista', component: ListaPacientesComponent },
      { path: 'detalle/:id', component: DetallePacientesComponent },
      { path: 'editar/:id', component: EditarPacientesComponent },
      { path: 'nuevo', component: NuevoPacienteComponent },
      { path: 'auth/user', component: UserComponent },
      { path: 'lista-turnos', component: ListaTurnosComponent },
      { path: 'lista-profesionales', component: ListaProfesionalesComponent },
      { path: 'lista-os', component: ListaOsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
