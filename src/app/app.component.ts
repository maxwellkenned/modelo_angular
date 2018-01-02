import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { WebService } from './laravel.service';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private webService: WebService, private route: Router){}

  private nomeUsuario = "";

  existeUsuario(){
    this.nomeUsuario = this.webService.getUsuario().nome;
    if(this.nomeUsuario){
      return true;
    }else{
      return false;
    }
  }

  sair(){
    this.webService.setUsuario({nome:"", email:"", token:""});
    this.route.navigateByUrl('entrar');
  }
}
