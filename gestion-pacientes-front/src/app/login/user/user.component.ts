import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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
  problem: Boolean = false;
  problemRegistro: Boolean;

  constructor(
    private builder: FormBuilder,
    private service: UserService,
    private router : Router,
    private toast: NgToastService
  ) { 
      this.form = this.builder.group({
      username: [''],
      email:[''],
      password: ['']
      });
    }

  ngOnInit(): void {
   
  }

  // registrar usuario nuevo ...
  registrarUsuario(): void {
    const username = this.form.get('username')?.value;
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    const user: User = new User (email,username, password, null);

    this.service.guardarUsuario(user).subscribe
    ({
      next: res => {
        this.users$ = this.service.obtenerUsuarios();
        this.problemRegistro = true;
      },
      error: err => {
        this.problemRegistro = false; 
      }
    })
  }

  // ingreso de usuario ...
  ingresar():void {
      const username = this.form.get('username')?.value;
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      const user: User = new User(email,username, password, null);

      this.service.ingresar(user).subscribe
    ({
      next: res => {
        this.users$ = this.service.obtenerUsuarios();
        this.router.navigate(['navigation']);
      },
      error: err => {
        this.problem = true;      
      }
    })
  }

  // borrar usuario ...
  borrarUsuario(user: User): void {
    this.service.borrarUsuario(user).subscribe((result) => {
      this.users$ = this.service.obtenerUsuarios();
    });
  }


  @Input() error: string | null;
}
