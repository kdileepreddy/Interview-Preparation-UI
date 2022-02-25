import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  public styleData$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Deep purple and Amber'
  );
  public styleData: Observable<string> = this.styleData$.asObservable();
  constructor() {}
}
