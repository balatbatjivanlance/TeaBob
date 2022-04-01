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
  driver_deliveries: any= 0;

  constructor(public us: UserService, public ds: DataService, private _router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
  
    this.driver_name = this.us.getDriver();
    this.driver_deliveries = this.pullDriverInfo();
   
    this.getApproved();
  }

  getApproved(){
    this.ds.sendApiRequest("getApproved", null).subscribe((data: { payload: any; }) => {
      this.approved = data.payload;

    })

  }

  pullDriverInfo(){
    this.ds.sendApiRequest("getDriverInfo", 
    {
      driver: this.us.getDriver()
     }
     ).subscribe((data: { payload: any; }) => {

      try{
        var keyCount  = Object.keys(data.payload).length;
        this.driver_deliveries = keyCount;
      }catch(e){
        this.driver_deliveries = 0;
      }
      
      

    })

  }


  viewOrder(approved:any){

    this._router.navigate(['/view-order'], {state: approved});
  }

}
