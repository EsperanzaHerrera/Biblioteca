import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos: TaskI[];

  constructor(
    private todoService: TodoService, 
    private authSvc: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ){}
  
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }
  //remueve registro
  onRemove(idTask:string){
    this.todoService.removeTodo(idTask);
  }
  //cerrar sesión
  onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut(); //metodo signOut
    //una vez deslogueado redirige
    this.router.navigateByUrl('/login');
  }

}
