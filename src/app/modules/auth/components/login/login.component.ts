import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements  OnInit{

  public usuarioLogueado: Usuario = new Usuario();

  constructor(
    private auth:AuthService, 
    private router: Router
    ) { }

  email : string ="";
  password : string ="";

  ngOnInit(): void {

  }

  public inicioSesion() {
    if (this.usuarioLogueado.email != null && this.usuarioLogueado.contrasenia != null) {

      this.auth.ingreso(this.usuarioLogueado.email, this.usuarioLogueado.contrasenia).then((respuesta) => {
        if (respuesta) {
          this.router.navigate(['home']);
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }

}

