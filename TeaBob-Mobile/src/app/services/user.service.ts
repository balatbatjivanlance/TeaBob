import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public driver_name: string = "";
  isLoggedIn: boolean = false;

  saveDriver(driver_name:string) 
  {
    
    this.driver_name = driver_name;
  }

  getDriver()
  {
    console.log(this.driver_name);
    return localStorage.getItem('Fullname');

  }
  constructor() { }

  setUserLoggedOut(): void {
    this.isLoggedIn = false;
  }

  setUser() {
    this.isLoggedIn = true;

  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
