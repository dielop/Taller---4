import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  pacienteURL = 'http://localhost:8080/pacientes/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacienteURL + 'lista');
  }

  public detail(id:number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.pacienteURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.pacienteURL + `detailname/${nombre}`);
  }

  public save(paciente: Paciente): Observable<any> {
    return this.httpClient.post<any>(this.pacienteURL + 'create', paciente);
  }

  public update(id:number, paciente: Paciente): Observable<any> {
    return this.httpClient.put<any>(this.pacienteURL + `update/${id}`, paciente);
  } 

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.pacienteURL + `delete/${id}`);
  }

}
