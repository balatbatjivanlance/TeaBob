  import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-delivery-history',
  templateUrl: './delivery-history.page.html',
  styleUrls: ['./delivery-history.page.scss'],
})
export class DeliveryHistoryPage implements OnInit {

  done:any;
  driver_name: string = '';

  constructor(public ds: DataService, public us: UserService) { }

  ngOnInit() {

    
  }

  ionViewDidEnter(){
    this.driver_name = this.us.getDriver();
 
    this.getDone();
  }

  getDone(){
    this.ds.sendApiRequest("getDone", {driver: this.driver_name}).subscribe((data: { payload: any; }) => {
      this.done = data.payload;

    

    })

  }

  

}
function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

