import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Entrar } from './entrar/entrar';
import { Cadastro } from './cadastro/cadastro';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'entrar', component: Entrar},
  { path: 'cadastro', component: Cadastro}

];
