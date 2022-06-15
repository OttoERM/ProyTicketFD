import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  arrayOfImgUrls = ['https://img.freepik.com/free-photo/young-rasta-black-man-holding-air-tickets-celebrating-victory-success_1187-113313.jpg',
  'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/f9pucsdoo82nnljtye6u',
  'https://us.123rf.com/450wm/stas11/stas111810/stas11181000009/109651646-mano-sujetando-el-boleto-en-un-dise%C3%B1o-plano-ilustraci%C3%B3n-vectorial.jpg?ver=6',];

  constructor() {
   }

  ngOnInit(): void {
  }

}