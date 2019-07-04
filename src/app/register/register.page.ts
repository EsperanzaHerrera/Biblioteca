import { Component, OnInit } from '@angular/core';
//importaciones
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //instancia de nuestra clase
  user: User = new User();
  //injectamos service
  //injectamos router
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}

  //método register para registrar nuevos usuarios
  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    //comprobar si hay un user
    if(user){
      console.log('Successfully created user!');
      //redirecciona hacia home
      this.router.navigateByUrl('/');
    }
  }

}