import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Array<Cliente> = [
    {
      nombre: 'Iberdrola', cif:'A16415411', localidad: 'Bilbao' 
    },
    {
      nombre: 'Jazztel', cif:'A987654321', localidad: 'Madrid' 
    },
    {
      nombre: 'La caixa', cif:'A123456789', localidad: 'Barcelona' 
    },
  ]

  constructor() { }

  getClientes(): Array<Cliente> {
    return this.clientes;
  }

  setCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }
}
