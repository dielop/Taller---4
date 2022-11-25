import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup;

  users$: Observable<User[]> = of([]);

  constructor(
    private builder: FormBuilder,
    private service: UserService
  ) { 
      this.form = this.builder.group({
      usuario: [''],
      clave: ['']
      });
    }

  ngOnInit(): void {
    this.users$ = this.service.obtenerUsuarios();
  }

  enviarDatos(): void {
    const usuario = this.form.get('usuario')?.value;
    const clave = this.form.get('clave')?.value;
    const user: User = new User(usuario, clave, null);

    this.service.guardarUsuario(user).subscribe((result) => {
      this.users$ = this.service.obtenerUsuarios();
    });
  }

  borrarUsuario(user: User): void {
    this.service.borrarUsuario(user).subscribe((result) => {
      this.users$ = this.service.obtenerUsuarios();
    });
  }
}
