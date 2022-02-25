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
import { InterestingFactsComponent } from './components/interesting-facts/interesting-facts.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AutoplayDirective } from './directives/autoplay.directive';
import { SafePipe } from './pipes/safe.pipe';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InterviewContentComponent,
    AngularComponent,
    SpringBootComponent,
    MyApplicationsComponent,
    InterestingFactsComponent,
    AutoplayDirective,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardLayoutModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule,
    YouTubePlayerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
