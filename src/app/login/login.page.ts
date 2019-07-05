import { Component, OnInit } from '@angular/core';
//redirecciona los usuarios una vez finalizado el login
import { Router } from '@angular/router';
//importar service
import { AuthService } from '../services/auth.service';
//importar clase
import { User } from '../shared/user.class'

//async = una función asíncrona
//await = espera la respuesta del services para ejecutarse

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //nueva instancia
  user: User = new User();
  constructor(
    private router: Router, 
    private authSvc: AuthService
  ) {}

  ngOnInit() {
  }

  //método on login
  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if (user){
      console.log("Successfully logged in! :D");
      //redirección a home-page
      this.router.navigateByUrl('/');
    }
  }

}
