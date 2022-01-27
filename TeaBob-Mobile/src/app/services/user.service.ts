import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public driver_name: string = "";

  saveDriver(driver_name:string) 
  {
    
    this.driver_name = driver_name;
  }

  getDriver()
  {
    console.log(this.driver_name);
    return this.driver_name;

  }

  constructor() { }
}
