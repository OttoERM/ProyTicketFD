import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/api/models';
import { TicketsControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-espera',
  templateUrl: './lista-espera.component.html',
  styleUrls: ['./lista-espera.component.css']
})
export class ListaEsperaComponent implements OnInit {
  tickets:Tickets[]
  cabeza:number
  leng:number
  bool:boolean

  formTicket:FormGroup = this.fb.group({
    id:[],
    numId:[],
    codigo:[],
    tipo:[],
    pref:[],
    fecha:[]
  })

  constructor(private ticketService:TicketsControllerService,
    private messageService:NzMessageService,
    private fb:FormBuilder
  ) {
    this.tickets = []
    this.cabeza = 0 
    this.leng = 0;
    this.bool = false;
  }

  ngOnInit(): void {
    this.ticketService.find().subscribe(datos => this.tickets = datos)
  }
}
