import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/layouts/main/main.component';
import { LandingComponent } from './landing/containers/landing/landing.component';
import { OrderComponent } from './order/containers/order/order.component';
import { OrderHistoryComponent } from './order-history/containers/order-history/order-history.component';
import { LoginComponent } from './auth/containers/login/login.component';
import { RegistrationComponent } from './auth/containers/registration/registration.component';




const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
/*   {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }, */
  {
    path: "order",
    component: MainComponent,
    children: [
      
      {
        path: "form",
        component: OrderComponent
      },
      {
        path: "order-history",
        component: OrderHistoryComponent
      }
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
