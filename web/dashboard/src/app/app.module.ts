import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './modules/apixu.service';
import { SetupModule } from './layouts/setup/setup.module';
import { LoginModule } from './layouts/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SetupModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApixuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
