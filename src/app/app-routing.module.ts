import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  { path: "", redirectTo:"Login", pathMatch:"full"},
  { path: "Login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "fogetpassword", component: ForgotPasswordComponent },
  {path: "home", component: NavBarComponent,
  children:[
    { path: "pipe", component: PipeComponent },
    { path: "pipe/:id", component: PipeComponent },
    { path: "review", component: PipeComponent },
    { path: "orders", component: OrderComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
