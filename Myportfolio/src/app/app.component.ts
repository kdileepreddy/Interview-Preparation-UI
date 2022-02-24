import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Myportfolio';
  public loading: boolean = true;
  constructor(private router: Router) {}
  ngOnInit() {
    this.timeOut();
  }
  timeOut() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
