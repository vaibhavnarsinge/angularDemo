import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginAppComponent } from './login-app/login-app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LoginAppComponent,
    RegisterComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
