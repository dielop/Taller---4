import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // declario variable con url ...
  
  userURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // guarda nuevo usuario en bbdd ...
  guardarUsuario(user: User): Observable<User> {
    return this.http.post<User>(`${this.userURL}/auth/signup`, user);
  }

  // ingreso de usuario ...
  ingresar(user: User): Observable<User> {
    return this.http.post<User>(`${this.userURL}/auth/signin`, user);
  }

  // recupera usuarios de bbdd ...
  obtenerUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userURL}/user`);
  }

  // borrar usuarios ...
  borrarUsuario(user: User): Observable<void> {
    return this.http.delete<void>(`${this.userURL}/user/${user.id}`);
  }
}
