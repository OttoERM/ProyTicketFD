import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/api/models';
import { TicketsControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cola',
  templateUrl: './cola.component.html',
  styleUrls: ['./cola.component.css']
})
export class ColaComponent implements OnInit {
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

  eliminar():void{
    this.messageService.info("Llamando a cliente con codigo "+this.tickets[0].codigo)
    let id:string;
    id = this.tickets[this.cabeza].id
    console.log("eliminar")
    this.ticketService.deleteById({id}).subscribe(() =>
    {this.tickets=this.tickets.filter(x => x.id !== id);
    })
    /*this.leng = this.tickets.length-1;
    this.cabeza = 0;
    var prueba = 0;
    this.bool = false;
    for(var i = 0; i<this.leng; i++){
      if(this.tickets[i].pref === true){
        prueba = 1
        break;
      }
      this.cabeza++;
    }

    let id:string;
    console.log(this.bool)
    
    if(prueba === 1){
      this.messageService.info("Llamando a cliente con codigo "+this.tickets[this.cabeza].codigo)
      id = this.tickets[this.cabeza].id
    }else{
      this.messageService.info("Llamando a cliente con codigo "+this.tickets[0].codigo)
      id = this.tickets[0].id
    }
    //this.messageService.info("Llamando a cliente con codigo "+this.tickets[this.cabeza].codigo)
    /*this.ticketService.deleteById({id}).subscribe(() =>
    {this.tickets=this.tickets.filter(x => x.id !== id);
    })*/
  }

}
