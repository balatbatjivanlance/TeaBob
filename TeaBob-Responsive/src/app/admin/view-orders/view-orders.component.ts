import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public status: any,
    public dialog: MatDialog,
    public ds: DataService
  ) { }

  ngOnInit(): void {
    this.pullCheckoutDetails();
    console.log(this.status)
  }

  corNumInfo: any = {};
  details: any;

  pullCheckoutDetails() {
    this.corNumInfo.code = this.status.code;


    this.ds.sendApiRequest("pullCodeDetails", this.status.code).subscribe((data: { payload: any; }) => {
      this.details = data.payload;

      console.log(this.details);

    })
  }

}