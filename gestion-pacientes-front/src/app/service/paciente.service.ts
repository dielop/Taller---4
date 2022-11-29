import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';


@Injectable({
   providedIn: 'root'
 })


//import { Injectable } from '@angular/core';
export class PacienteService {
  pacienteURL = 'http://localhost:8080/pacientes/';

  constructor(private httpClient: HttpClient) { }

  // obtiene lista de pacientes ...
  public lista(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacienteURL + 'lista');
  }

  // obtiene paciente por id ...
  public getPatientDetailById(id:number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.pacienteURL + `detail/${id}`);
  }

  // obtiene paciente por nombre ...
  public detailName(nombre: string): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.pacienteURL + `detailname/${nombre}`);
  }

  // guarda paciente en bbdd ...
  public save(paciente: Paciente): Observable<any> {
    return this.httpClient.post<any>(this.pacienteURL + 'create', paciente);
  }

  // actualiza paciente en bbdd ...
  public update(id:number, paciente: Paciente): Observable<any> {
    return this.httpClient.put<any>(this.pacienteURL + `update/${id}`, paciente);
  } 

  // elimina paciente ...
  deletePatient(dni:string): Observable<Object>{
     return this.httpClient.delete(this.pacienteURL + `delete/${dni}`);
  }

}
