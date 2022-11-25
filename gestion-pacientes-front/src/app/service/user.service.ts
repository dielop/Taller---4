import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  guardarUsuario(user: User): Observable<User> {
    return this.http.post<User>(`${this.userURL}/user`, user);
  }

  obtenerUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userURL}/user`);
  }

  borrarUsuario(user: User): Observable<void> {
    return this.http.delete<void>(`${this.userURL}/user/${user.id}`);
  }
}
