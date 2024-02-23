import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { HomeComponent } from './home/home.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
