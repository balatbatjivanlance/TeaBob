import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
// import * as internal from 'stream';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  approved:any;

  driver_name: string = '';
  driver_deliveries: any;

  constructor(public us: UserService, public ds: DataService, private _router: Router) { }

  ngOnInit() {
    console.log("hello");
    // console.log(this.us.getDriver());
    this.driver_name = this.us.getDriver();
    this.driver_deliveries = this.pullDriverInfo();
    this.getApproved();
  }

  getApproved(){
    this.ds.sendApiRequest("getApproved", null).subscribe((data: { payload: any; }) => {
      this.approved = data.payload;

      console.log(this.approved);
      

    })

  }

  pullDriverInfo(){
    this.ds.sendApiRequest("getDriverInfo", 
    {
      driver: this.us.getDriver()
     }
     ).subscribe((data: { payload: any; }) => {
      // this.driver_deliveries = data.payload;

      // console.log(this.driver_deliveries);

      var keyCount  = Object.keys(data.payload).length;
      
      this.driver_deliveries = keyCount;

    })

  }


  viewOrder(approved:any){

    // console.log(approved);
    this._router.navigate(['/view-order'], {state: approved});
  }

}
