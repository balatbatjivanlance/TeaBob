import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view-order-history',
  templateUrl: './view-order-history.component.html',
  styleUrls: ['./view-order-history.component.css']
})
export class ViewOrderHistoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public status: any,
    public dialog: MatDialog,
    public ds: DataService
  ) { }

  ngOnInit(): void {
    this.pullCodeDetails();
    // this.pullCoCodeDetails();
    console.log(this.status)
  }

  
  corNumInfo: any = {};
  details: any;


  // code: any;

  prod_name: any;
  prod_price: any;
  food_quantity: any;
  checkout_date: any;

  pullCodeDetails() {
    this.corNumInfo.code = this.status.code;

    this.ds.sendApiRequest("pullCodeDetails", this.status.code).subscribe((data: { payload: any; }) => {
      this.details = data.payload;

      
    this.prod_name = this.details[0].prod_name;
    this.prod_price = this.details[0].prod_price;
    this.food_quantity = this.details[0].food_quantity;
    this.checkout_date = this.details[0].checkout_date;
    // this.is_approved = this.details[0].is_approved;
      // console.log(this.details);

    })
  }

}
