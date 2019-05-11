import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(usuario:string, contrasena:string){
    this.loginService.login().subscribe(
      (data: Response) =>{
        var usuarios = JSON.parse(JSON.stringify(data));
        var validacion = false;
        usuarios.forEach((usr) => {
          if(usr.email == usuario && usr.contrasena == contrasena) {
            validacion = true;
          }
        });
        validacion ? this.router.navigate(['principal']) : alert('Credenciales inválidas');
        console.log(contrasena)
        console.log(usuarios)
        console.log(usuario)
        console.log(validacion);
      }
    )
  }
}
