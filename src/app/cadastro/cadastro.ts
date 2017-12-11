import {Component} from '@angular/core';

import { WebService } from '../laravel.service';

@Component({
  selector: 'cadastro',
  styleUrls: ['./cadastro.css'],
  templateUrl: './cadastro.html'
})
export class Cadastro {
  constructor(private webService: WebService){}
  private cadastro = {nome:'', email:'', senha:''};
  private msg = '';

  addCadastro(){
    var self = this;
    this.webService.cadastro(self.cadastro.nome, self.cadastro.email, self.cadastro.senha)
    .then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
      } else{
        console.log(retorno.data);
      }
    });
  }

}
