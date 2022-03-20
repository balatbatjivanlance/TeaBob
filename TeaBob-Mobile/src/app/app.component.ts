import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
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
  constructor(private us: UserService, private _router: Router) {}

  logout(){
    this.us.setUserLoggedOut();
    window.localStorage.removeItem("Fullname");
    window.localStorage.removeItem("Driver_email");
    window.localStorage.removeItem("Driver_id");
    window.localStorage.removeItem("is_logged_in");
    this._router.navigate(['/login']);
    // copy mo nalang codes sa kabila men pag wala pa dun sa responsive
    // wait gawin ko saglit
    //sige pre
  }

}
