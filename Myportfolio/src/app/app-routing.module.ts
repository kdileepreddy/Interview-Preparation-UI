import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InterestingFactsComponent } from './components/interesting-facts/interesting-facts.component';
import { AngularComponent } from './components/interview-content/angular/angular.component';
import { InterviewContentComponent } from './components/interview-content/interview-content.component';
import { Java8Component } from './components/interview-content/java8/java8.component';
import { JavacodeComponent } from './components/interview-content/java8/javacode/javacode.component';
import { JavacompilerComponent } from './components/interview-content/java8/javacompiler/javacompiler.component';
import { SpringBootComponent } from './components/interview-content/spring-boot/spring-boot.component';
import { MyApplicationsComponent } from './components/my-applications/my-applications.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: InterestingFactsComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'angularContent',
        component: AngularComponent,
      },
      {
        path: 'springboot-content',
        component: SpringBootComponent,
      },
      {
        path: 'Java8',
        component: Java8Component,
        children: [
       {
        path: '',
        redirectTo: 'code',
        pathMatch: 'full'
      }, 
      {
        path: 'code',
        component: JavacodeComponent,
      },  
      {
        path: 'compiler',
        component: JavacompilerComponent,
      },
      {
        path: 'interviewquestions',
        component: InterviewContentComponent,
      }]
      },
      {
        path: 'myApplications',
        component: MyApplicationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
