import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private data: DataService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (!this.data.isUserLoggedIn()) {
      //   this.router.navigate(['login']);
      //   return false;
      // }
  
      // return true;
      
      let role = localStorage.getItem('user_role');
      if(role == '1'){
        return true;
      } else if(role == '0'){
        //this.router.navigate(["consAdmin"]);
        return true;
      }
      this.router.navigate(['home']);
      return false;
  }

  
  
}
