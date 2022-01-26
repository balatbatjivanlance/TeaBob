import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delivery-history',
  templateUrl: './delivery-history.page.html',
  styleUrls: ['./delivery-history.page.scss'],
})
export class DeliveryHistoryPage implements OnInit {

  done:any;

  constructor(public ds: DataService) { }

  ngOnInit() {
    console.log("hello");
    this.getDone();
  }

  getDone(){
    this.ds.sendApiRequest("getDone", null).subscribe((data: { payload: any; }) => {
      this.done = data.payload;

      console.log(this.done);

    })

  }

  

}
function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

