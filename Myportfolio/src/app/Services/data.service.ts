import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public pagedata$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Interesting Facts'
  );
  public pagedata: Observable<string> = this.pagedata$.asObservable();
  public carddata$: Subject<number> = new Subject<number>();
  public carddata: Observable<number> = this.carddata$.asObservable();
  public NumberOfCards: number = 2;
  constructor() {}
}
