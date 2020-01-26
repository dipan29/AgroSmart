import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SetupComponent } from './setup.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { ConfigComponent } from 'src/app/modules/config/config.component';
import { MatDividerModule, MatCardModule, MatSidenavModule, MatSlideToggleModule, MatSelectModule, MatButtonModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';



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
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    Title
  ]
})
export class SetupModule { }
