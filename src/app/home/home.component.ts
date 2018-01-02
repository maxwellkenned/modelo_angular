import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { WebService } from '../laravel.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private webService: WebService, private route: Router){
    if(!this.webService.getUsuario().nome){
      this.route.navigateByUrl('entrar');
    }
    let self = this;
    this.webService.getNoticia(self.webService.getUsuario().token).then(function(retorno){
      if(retorno.status){
        self.noticias = retorno.data;
        console.log(retorno.data);
      }else{
        this.route.navigateByUrl('entrar');
      }
    });

  }

  private noticias;

}
