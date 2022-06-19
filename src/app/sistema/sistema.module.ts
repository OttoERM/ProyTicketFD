import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ManejoComponent } from './manejo/manejo.component';
import { TicketsComponent } from './tickets/tickets.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ColaComponent } from './cola/cola.component';
import { ListaEsperaComponent } from './lista-espera/lista-espera.component';

@NgModule({
  declarations: [
    BienvenidoComponent,
    ManejoComponent,
    TicketsComponent,
    ColaComponent,
    ListaEsperaComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzCarouselModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzDatePickerModule,
    NzMessageModule,
    NzButtonModule,
    NzTableModule,
    NzModalModule,
    NzDividerModule,
    NzPopconfirmModule,
    NzSelectModule,
    NzCheckboxModule
  ]
})
export class SistemaModule { }
