import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsControllerService } from 'src/app/api/services';
import { Tickets } from 'src/app/api/models';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  
  constructor(private fb: FormBuilder,
    private ticketServices:TicketsControllerService,
    private messageService: NzMessageService,) 
    {
      this.tickets = []
      this.today = new Date();
      this.date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
      this.cod = "C";
      this.contador = "";
      this.temp = 0;
    }
  
  tickets:Tickets[]
  temporal = 0;
  today
  date
  cod
  contador
  temp

  validateForm = this.fb.group({
    numId: [null, [Validators.required]],
    codigo: [null, [Validators.required]],
    tipo: [null, [Validators.required]],
    pref:[false],
    fecha: [5654]
  });

  

  ngOnInit(): void {
    this.ticketServices.find().subscribe(datos => this.tickets = datos)
    /*for(var i = 0; i<=this.tickets.length; i++){
      console.log(this.tickets[i])
      this.temporal++;
    }*/
  }

  crearCod(){
    //this.cod = "A"+String(((Math.random() * (100 - 300 + 1)) +300).toFixed(0));
    this.temp = this.tickets.length - 1;
    this.contador = this.tickets[this.temp].codigo
    this.temp = parseInt(this.contador)
    this.temp++;
    this.contador = String(this.temp)
    this.cod = String(this.contador)
    var values = this.validateForm.getRawValue()
    this.validateForm.setValue({
      numId:values.numId,
      codigo:this.cod,
      tipo:values.tipo,
      pref:values.pref,
      fecha:this.date
    })
  }

  submitForm(): void {
    this.crearCod()
    this.ticketServices.create({body:this.validateForm.value}).subscribe((datoAgregado) => {
      this.tickets = [...this.tickets, datoAgregado]
      this.messageService.success("su ticket es "+this.cod)
      this.temporal++
    })
    this.validateForm.reset();
  }

}
