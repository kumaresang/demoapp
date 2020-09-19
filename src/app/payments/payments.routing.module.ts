import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PaymentsFormComponent } from './form/form.component';
import { PaymentsDashBoardComponent } from './payments.dashboard.component';


const routes: Routes = [
  {
    path: '',  
    children: [
         {
             path: '',
            component: PaymentsDashBoardComponent
     },
    {
        path:"initiation",
        component : PaymentsFormComponent
    }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaymentsRoutingModule { }
