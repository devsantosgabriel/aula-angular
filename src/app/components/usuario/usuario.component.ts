import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Users } from 'src/app/Users';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

constructor(private usuarioService: UsuarioService){}

ngOnInit(): void {}
usuario: Users = {
  id: 3,
  nome: "Hugo",
  idade: 75
}
usuarios: Users[]=[
  {id: 1, nome: "Heitor", idade: 26},
  {id: 2, nome: "Rafael", idade: 60},
  {id: 4, nome: "Gabriel", idade: 70}
]

removePessoa(usuario: Users){  
  return this.usuarioService.remove(this.usuarios, usuario)
}

}
