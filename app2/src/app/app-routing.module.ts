import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdComponent } from './prod/prod.component';

const routes: Routes = [
  {path:'', component:ProdComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
