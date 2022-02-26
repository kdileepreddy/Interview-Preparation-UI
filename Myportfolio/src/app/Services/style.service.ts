import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  public themeJson: any = {
    deeppurpleAmber: {
      title: 'deeppurpleAmberTitle',
      header: 'deeppurpleAmberheader',
      headingColor: '#673ab7',
      content: 'deeppurpleAmbercontent',
      button: 'deeppurpleAmber-button',
      search: 'deeppurpleAmberSearch',
      iconColor: 'deeppurpleAmberIcon',
      navlink: 'deeppurpleAmber-nav-link',
      activelink: 'deeppurpleAmber-active-link',
    },

    indigoPink: {
      title: 'indigoPinkTitle',
      header: 'indigoPinkheader',
      headingColor: '#3f51b5',
      content: 'indigoPinkcontent',
      button: 'indigoPink-button',
      search: 'indigoPinkSearch',
      navlink: 'indigoPink-nav-link',
      activelink: 'indigoPink-active-link',
    },
    pinkBluegrey: {
      backgroundColor: '#303030',
      buttonColor: '#607d8b',
      headingColor: '#e91e63',
      label: 'Pink & Blue Grey',
      value: 'pink-bluegrey',
    },
    purpleGreen: {
      backgroundColor: '#303030',
      buttonColor: '#4caf50',
      headingColor: '#9c27b0',
      label: 'Purple & Green',
      value: 'purple-green',
    },
  };

  public styleData$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'deeppurpleAmber'
  );
  public styleData: Observable<string> = this.styleData$.asObservable();
  constructor() {}
}
