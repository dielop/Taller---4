import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private builder: FormBuilder,
    private service: UserService,
    private router : Router
  ) { 
      this.form = this.builder.group({
      username: [''],
      password: ['']
      });
    }

  ngOnInit(): void {
   
  }

  enviarDatos(): void {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    const user: User = new User (null,username, password, null);

    this.service.guardarUsuario(user).subscribe((result) => {
      this.users$ = this.service.obtenerUsuarios();
    });
  }

  ingresar():void {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    const user: User = new User(null,username, password, null);

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

/*   ingresar():void {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    const user: User = new User(null,username, password, null);

    this.service.ingresar(user).subscribe((result) =>{
      this.users$ = this.service.obtenerUsuarios();
      if(this.users$ != null){
        this.router.navigate(['navigation']);
      }
    }
    )
  } */

  borrarUsuario(user: User): void {
    this.service.borrarUsuario(user).subscribe((result) => {
      this.users$ = this.service.obtenerUsuarios();
    });
  }


  @Input() error: string | null;
}
