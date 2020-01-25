import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { StatsComponent } from 'src/app/modules/stats/stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule } from '@angular/material';
import { BrowserModule, Title }  from '@angular/platform-browser';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserModule
  ],
  providers: [
    Title
  ],
})
export class DefaultModule { }
