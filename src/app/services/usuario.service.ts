import { Injectable } from '@angular/core';
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  remove(usuarios : Users[], usuario : Users ){
   return usuarios.filter((item)=> usuario.nome !== item.nome)
  }
}
