import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentsRoutingModule } from './payments.routing.module';
import { PaymentsDashBoardComponent } from './payments.dashboard.component';
import { PaymentsFormComponent } from './form/form.component';
import { PaymentsHeaderComponent } from './common/payments.header.component';


@NgModule({
  imports: [    
    FormsModule,
    ReactiveFormsModule,    
    PaymentsRoutingModule,
    CommonModule    
  ],
  declarations: [
    PaymentsDashBoardComponent,
    PaymentsFormComponent,
   PaymentsHeaderComponent
  ]
})

export class  PaymentsModule{

}