import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';

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

  // codeInfo: any = {};
  // cocodedetails: any;

  // pullCoCodeDetails() {
  //   this.codeInfo.code = this.status.code;

  //   this.ds.sendApiRequest("pullCoCodeDetails", this.status.code).subscribe((data: { payload: any; }) => {
  //     this.cocodedetails = data.payload;

  //   this.is_approved = this.cocodedetails[0].is_approved;
  //     // console.log(this.details);

  //   })
  // }


  selectedStatus: string = '';

  selectChangeHandlerStatus (event: any){
    this.selectedStatus = event.target.value;

    console.log(this.selectedStatus);
  }

  
  is_approved: any;
  codeinfo: any;

  updateStatus() {
   
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let id  = this.status.user_id;

        this.codeinfo.user_id =  id;
        this.codeinfo.is_approved = this.is_approved = this.selectedStatus;

    this.ds.sendApiRequest("updateStatus/" + id, this.codeinfo).subscribe((data: { payload: any; }) => {});

        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    this.dialog.closeAll();
  }


}