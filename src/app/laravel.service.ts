import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class WebService{
  private headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/x-www-form-urlencoded' });
  private urlCadastro = 'http://localhost:8000/api/cadastro/';
  private urlLogin = 'http://localhost:8000/api/login/';

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
}
