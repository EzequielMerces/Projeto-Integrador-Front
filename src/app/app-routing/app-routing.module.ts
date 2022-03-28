import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralJogosComponent } from '../mural-jogos/mural-jogos.component';
import { CadastroJogosComponent } from '../cadastro-jogos/cadastro-jogos.component';

const rotas : Routes = [
  {path:'mural', component:MuralJogosComponent },
  {path:'cadastro-jogos', component:CadastroJogosComponent},
  {path:'',redirectTo : '/mural',pathMatch:'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
