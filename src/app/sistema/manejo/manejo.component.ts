import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/api/models';
import { TicketsControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manejo',
  templateUrl: './manejo.component.html',
  styleUrls: ['./manejo.component.css']
})
export class ManejoComponent implements OnInit {
  tickets:Tickets[]
  visible:boolean = false

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
    this.tickets = [] }

  ngOnInit(): void {
    this.ticketService.find().subscribe(datos => this.tickets = datos)
  }

  mostrar(data:Tickets):void{
    if(data.id){
      this.formTicket.setValue(data)
    }
    this.visible=true;
  }

  mostrarModal(){
    this.visible=true;
  }

  eliminar(id:string):void{
    console.log("eliminar")
    this.ticketService.deleteById({id}).subscribe(() =>
    {this.tickets=this.tickets.filter(x => x.id !== id);
      this.messageService.success("Registro borrado con exito!")
    })
  }

  cancel():void{
    this.messageService.info("Cerrando, sin cambios")
  }

  ocultar():void{
    this.visible =false;
    this.formTicket.reset()
  }

  guardar():void{
    this.formTicket.setValue({...this.formTicket.value})
    delete this.formTicket.value.id
    this.ticketService.create({body:this.formTicket.value}).subscribe((datoAgregado) => {
      this.tickets = [...this.tickets, datoAgregado]
      this.messageService.success("Registro creado con exito")
    })
    this.formTicket.reset()
    this.visible = false
  }

  actualizar():void{
    if(this.formTicket.value.id){
      this.ticketService.updateById({'id':this.formTicket.value.id, 'body': this.formTicket.value}
      ).subscribe(() => {this.tickets = this.tickets.map(obj => {
        if(obj.id === this.formTicket.value.id){
          return this.formTicket.value;
        }
        return obj;
      })
      this.messageService.success("Registro actualizado con exito")
      this.formTicket.reset()
      this.visible = false
      })
    }
  }

}
