import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class WebService{
  private urlWB = "http://webserviceceu2.herokuapp.com";
  private urlLH = "http://localhost:8000";
  private headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/x-www-form-urlencoded' });
  private urlCadastro = this.urlWB+'/api/cadastro/';
  private urlLogin = this.urlWB+'/api/login/';
  private urlNoticia = this.urlWB+'/api/noticias?api_token=';

  constructor(private http:Http){}

  cadastro(name: string, email: string, password: string){
    var body = {name: name, email: email, password: password};
    return this.http
    .post(this.urlCadastro, body, this.headers)
    .toPromise().then(res=>res.json());
  }
  login(email: string, password: string){
    var body = {email: email, password: password};

    return this.http
    .post(this.urlLogin, body, this.headers)
    .toPromise().then(res=>res.json());
  }

  getNoticia(token: string){
    return this.http
    .get(this.urlNoticia+token)
    .toPromise().then(res=>res.json());
  }

  setUsuario(usuario){
    window.localStorage.setItem('usuarioNome', usuario.nome);
    window.localStorage.setItem('usuarioEmail', usuario.email);
    window.localStorage.setItem('usuarioToken', usuario.token);
  }

  getUsuario(){
    return {
      nome: window.localStorage.getItem('usuarioNome'),
      email: window.localStorage.getItem('usuarioEmail'),
      token: window.localStorage.getItem('usuarioToken')
    }
  }
}
