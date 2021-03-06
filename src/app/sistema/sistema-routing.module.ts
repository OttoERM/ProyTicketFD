import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ColaComponent } from './cola/cola.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';
import { ManejoComponent } from './manejo/manejo.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'bienvenido', component:BienvenidoComponent},
      {path:'tickets', component:TicketsComponent},
      {path:'manejo', component:ManejoComponent},
      {path:'cola', component:ColaComponent},
      {path:'listaEspera', component:ListaEsperaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
