import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardLayoutModule } from './layouts/dashboard-layout/dashboard-layout.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InterviewContentComponent } from './components/interview-content/interview-content.component';
import { AngularComponent } from './components/interview-content/angular/angular.component';
import { SpringBootComponent } from './components/interview-content/spring-boot/spring-boot.component';
import { MyApplicationsComponent } from './components/my-applications/my-applications.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InterviewContentComponent,
    AngularComponent,
    SpringBootComponent,
    MyApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
