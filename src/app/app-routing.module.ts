import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginAppComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'addemployee',
    component:AddemployeeComponent
  },
  {
    path:'addemployee/:id',
    component:AddemployeeComponent
  },
  {
    path:"header",
    component:HeaderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
