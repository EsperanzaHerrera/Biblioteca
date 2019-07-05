import { Injectable } from '@angular/core';
//importa módulo
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //propiedad de cualquier tipo
  //con ella sabemos si nuestro usuario
  //está logueado o no
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    //estado si es que el usuario
    //está logueado o no, en caso de no estar
    //logueado devuelve un null
    afAuth.authState.subscribe( user => (this.isLogged = user))
  }

  //login 
  async onLogin (user: User){
    try{
      //método para loguear
      return await this.afAuth.auth.signInWithEmailAndPassword(
        user.email, 
        user.password
      );
    } catch (error){
      console.log('Error on login', error);
    
    }
  }

  //register
  async onRegister (user: User){
    try{
      //método para crear usuario
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email, 
        user.password
      );
    } catch (error) {
      console.log('Error on register user', error);
    }
  }

}
