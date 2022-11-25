import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './login/user/user.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DetallePacientesComponent } from './paciente/detalle-pacientes/detalle-pacientes.component';
import { EditarPacientesComponent } from './paciente/editar-pacientes/editar-pacientes.component';
import { ListaPacientesComponent } from './paciente/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente/nuevo-paciente.component';

const routes: Routes = [
   
   //{ path: '', component: SigninComponent },
     {path: '', component: NavegacionComponent,
      
      children: [
      {path: 'lista', component: ListaPacientesComponent},
      {path: 'detalle/:id', component: DetallePacientesComponent},
      {path: 'editar/:id', component: EditarPacientesComponent},
      {path: 'nuevo', component: NuevoPacienteComponent},
      {path: 'auth/user', component: UserComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'},
               ],
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
