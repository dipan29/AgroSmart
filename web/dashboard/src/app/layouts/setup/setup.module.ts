import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupComponent } from './setup.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ]
})
export class SetupModule { }
