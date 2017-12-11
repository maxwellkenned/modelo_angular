import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { Entrar } from './entrar/entrar';
import { Cadastro } from './cadastro/cadastro';
import { Card } from './card/card';

import { WebService } from './laravel.service';


@NgModule({
  declarations: [AppComponent, HomeComponent, Entrar, Cadastro, Card],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig, { useHash: true })],
  providers: [ WebService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
