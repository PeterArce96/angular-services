import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: any = [
    {
      nombre: 'Iberdrola', cif:'A16415411', domicilio: 'Bilbao' 
    },
    {
      nombre: 'Jazztel', cif:'A987654321', domicilio: 'Madrid' 
    },
    {
      nombre: 'La caixa', cif:'A123456789', domicilio: 'Barcelona' 
    },
  ]

  constructor() { }

  getClientes(): any {
    return this.clientes;
  }
}
