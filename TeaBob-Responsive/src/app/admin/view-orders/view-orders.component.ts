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
  }

  corNumInfo: any = {};
  details: any;


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

    })
  }

  
  is_approved: any;
  
  codeinfo: any = {};

  updateStatus() {
   
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let cocode_id  = this.status.cocode_id;

        this.codeinfo.cocode_id =  cocode_id;
        this.codeinfo.is_approved = 1;

    this.ds.sendApiRequest("updateStatus/" + cocode_id, this.codeinfo).subscribe((data: { payload: any; }) => {});

        Swal.fire('Saved!', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    this.dialog.closeAll();
  }

  async updateStatusNotApproved() {
   
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Reason why not approved?',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let cocode_id  = this.status.cocode_id;

        this.codeinfo.cocode_id =  cocode_id;
        this.codeinfo.is_approved = 6;

    this.ds.sendApiRequest("updateStatus/" + cocode_id, this.codeinfo).subscribe((data: { payload: any; }) => {});

        Swal.fire('Saved!', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    this.dialog.closeAll();
  }

}