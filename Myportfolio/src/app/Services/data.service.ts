import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public pagedata$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Profile'
  );
  public pagedata: Observable<string> = this.pagedata$.asObservable();
  public carddata$: Subject<number> = new Subject<number>();
  public carddata: Observable<number> = this.carddata$.asObservable();
  public NumberOfCards: number = 2;
  constructor(private http:HttpClient) {}

  getAngularContent(): Observable<string>{
    return this.http.get('https://interviewcontentapi.herokuapp.com/getAngularContent',{ responseType: 'text'});
  }
}
