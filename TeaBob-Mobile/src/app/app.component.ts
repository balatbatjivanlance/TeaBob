import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Orders', url: '/home', icon : 'basket'},
    {title: 'History', url: '/delivery-history', icon : 'archive'},
    {title: 'Logout', url: '/login', icon : 'log-out'}

  ];
  constructor() {}
}
