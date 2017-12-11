import {Component} from '@angular/core';
import { WebService } from '../laravel.service';

@Component({
  selector: 'entrar',
  styleUrls: ['./entrar.css'],
  templateUrl: './entrar.html'
})
export class Entrar {

  constructor(private webService: WebService){}
  private login = {email:'', senha:''};
  private msg = '';

  getLogin(){
    var self = this;
    this.webService.login(self.login.email, self.login.senha)
    .then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
      } else{
        console.log(retorno.data);
      }
    });
  }

}
