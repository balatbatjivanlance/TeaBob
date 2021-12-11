import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
  styleUrls: ['./orders-modal.component.css']
})
export class OrdersModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public code: any,
    public dialog: MatDialog,
    public ds: DataService
  ) { }

  ngOnInit(): void {
    this.pullCheckoutDetails();
  }

  corNumInfo: any = {};
  details: any;

  pullCheckoutDetails() {
    this.corNumInfo.code = this.code;

    console.log(this.code)

    this.ds.sendApiRequest("pullCodeDetails", this.code).subscribe((data: { payload: any; }) => {
      this.details = data.payload;

      console.log(this.details);

    })
  }

}
