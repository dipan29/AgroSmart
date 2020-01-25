import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SetupComponent } from './setup.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    BrowserModule
  ]
})
export class SetupModule { }
