import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path : "",
  redirectTo :"/payments",
  pathMatch : "full"
},
{
  path :"payments",
  loadChildren : "./payments/payments.module#PaymentsModule"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
