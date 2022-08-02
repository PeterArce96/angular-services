import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: any = [
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

  getClientes(): any {
    return this.clientes;
  }
}
