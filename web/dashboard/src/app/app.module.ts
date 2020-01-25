import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { SettingsComponent } from './modules/settings/settings.component';
import { ControlComponent } from './modules/control/control.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HelpComponent } from './modules/help/help.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './modules/apixu.service';
import { SetupComponent } from './layouts/setup/setup.component';
import { LoginComponent } from './modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApixuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
