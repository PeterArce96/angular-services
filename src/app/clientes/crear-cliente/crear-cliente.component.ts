import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: any = {
    nombre: '',
    cif: '',
    localidad: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  addCliente() {
    console.log(this.cliente);
  }

}
