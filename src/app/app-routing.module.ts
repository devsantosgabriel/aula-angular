import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usuario', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
