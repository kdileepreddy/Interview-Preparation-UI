import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  public themeJson: any = {
    magentaAndRedOrange: {
      title: 'magentaAndRedOrangeTitle',
      header: 'magentaAndRedOrangeheader',
      headingColor: '#673ab7',
      content: 'magentaAndRedOrangecontent',
      button: 'magentaAndRedOrange-button',
      search: 'magentaAndRedOrangeSearch',
      iconColor: 'magentaAndRedOrangeIcon',
      navlink: 'magentaAndRedOrange-nav-link',
      activelink: 'magentaAndRedOrange-active-link',
      menuitem: 'magentaAndRedOrangeMenuItem',
      likebutton: 'magentaAndRedOrangelikeButton',
      sharebutton: 'magentaAndRedOrangeshareButton',
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
      menuitem: 'indigoPinkMenuItem',
      likebutton: 'indigoPinklikeButton',
      sharebutton: 'indigoPinkshareButton',
    },
    pinkBluegrey: {
      title: 'pinkBluegreyTitle',
      header: 'pinkBluegreyheader',
      headingColor: '#673ab7',
      content: 'pinkBluegreycontent',
      button: 'pinkBluegrey-button',
      search: 'pinkBluegreySearch',
      iconColor: 'pinkBluegreyIcon',
      navlink: 'pinkBluegrey-nav-link',
      activelink: 'pinkBluegrey-active-link',
      menuitem: 'pinkBluegreyMenuItem',
      likebutton: 'pinkBluegreylikeButton',
      sharebutton: 'pinkBluegreyshareButton',
    },
    RedAndLively: {
      title: 'RedAndLivelyTitle',
      header: 'RedAndLivelyheader',
      headingColor: '#673ab7',
      content: 'RedAndLivelycontent',
      button: 'RedAndLively-button',
      search: 'RedAndLivelySearch',
      iconColor: 'RedAndLivelyIcon',
      navlink: 'RedAndLively-nav-link',
      activelink: 'RedAndLively-active-link',
      menuitem: 'RedAndLivelyMenuItem',
      likebutton: 'RedAndLivelylikeButton',
      sharebutton: 'RedAndLivelyshareButton',
    },
  };

  public styleData$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'magentaAndRedOrange'
  );
  public styleData: Observable<string> = this.styleData$.asObservable();
  public defaultTheme: any = 'magentaAndRedOrange';
  constructor() {}
}
