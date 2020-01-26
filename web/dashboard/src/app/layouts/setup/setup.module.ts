import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupComponent } from './setup.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { ConfigComponent } from 'src/app/modules/config/config.component';



@NgModule({
  declarations: [
    SetupComponent,
    LoginComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule
  ]
})
export class SetupModule { }
