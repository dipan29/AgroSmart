import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { StatsComponent } from 'src/app/modules/stats/stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatSlideToggleModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { ControlComponent } from 'src/app/modules/control/control.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { HelpComponent } from 'src/app/modules/help/help.component';
import { CookieService } from 'ngx-cookie-service';
import { SelectPropertyComponent } from 'src/app/modules/select-property/select-property.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    StatsComponent,
    SettingsComponent,
    ControlComponent,
    ContactComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    DashboardService,
    CookieService,
    Title
  ],
})
export class DefaultModule { }
