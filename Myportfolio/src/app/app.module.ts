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
import { MatDialogModule } from '@angular/material/dialog';
import { Java8Component } from './components/interview-content/java8/java8.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { FlipCardFrontComponent } from './components/flip-card/flip-card-front/flip-card-front.component';
import { FlipCardBackComponent } from './components/flip-card/flip-card-back/flip-card-back.component';
import { BackgroundCSSDirective } from './directives/background-css.directive';
import { MatDividerModule } from '@angular/material/divider';
import { JavacompilerComponent } from './components/interview-content/java8/javacompiler/javacompiler.component';
import { JavacodeComponent } from './components/interview-content/java8/javacode/javacode.component';
import { LanguagecontentComponent } from './components/interview-content/java8/languagecontent/languagecontent.component';
import { LanguagecontentbackComponent } from './components/interview-content/java8/languagecontentback/languagecontentback.component';
import { CodecontentComponent } from './components/interview-content/java8/codecontent/codecontent.component';
import { CodecontentbackComponent } from './components/interview-content/java8/codecontentback/codecontentback.component';
import { InterviewquestionsComponent } from './components/interview-content/interviewquestions/interviewquestions.component';
import { CardComponent } from './components/card/card.component';

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
    Java8Component,
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent,
    BackgroundCSSDirective,
    JavacompilerComponent,
    JavacodeComponent,
    LanguagecontentComponent,
    LanguagecontentbackComponent,
    CodecontentComponent,
    CodecontentbackComponent,
    InterviewquestionsComponent,
    CardComponent,
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
    MatDialogModule ,
    MatDividerModule

  ],
  exports:[BackgroundCSSDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
