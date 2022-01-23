import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class DashboardLayoutModule { }
