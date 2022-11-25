import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Material Angular importaciones

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { NgToastModule } from 'ng-angular-popup';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

// Componentes
import { ListaPacientesComponent } from './paciente/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './paciente/nuevo-paciente/nuevo-paciente.component';
import { DetallePacientesComponent} from './paciente/detalle-pacientes/detalle-pacientes.component'
import { EditarPacientesComponent } from './paciente/editar-pacientes/editar-pacientes.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { UserComponent } from './login/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarPacientesComponent,
    DetallePacientesComponent,
    NuevoPacienteComponent,
    NavegacionComponent,
    ListaPacientesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    NgToastModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    { provide: MatDialogRef,
      useValue: {}
    }, 
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
