import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-size',
  templateUrl: './update-size.component.html',
  styleUrls: ['./update-size.component.css']
})
export class UpdateSizeComponent implements OnInit {

  constructor( private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, public dialog: MatDialog )
   { }

  ngOnInit(): void {
    this.pullSize();
  }


  sizeinfo: any = {};
  size_payload: any [] = []; 

  size_name: any;
  size_price: any;
  size_stocks: any;

  pullSize() {
    this.sizeinfo.size_id = this.data.size_id;

    this.ds.sendApiRequest("pullSizeDetails", this.data.size_id).subscribe((data: { payload: any; }) => {
    this.size_payload = data.payload;
    
    this.size_name = this.size_payload[0].size_name;
    this.size_price = this.size_payload[0].size_price;
    this.size_stocks = this.size_payload[0].size_stocks;
    }
    )
  }

  sizeupdate: any [] = [];
  
  updateSize() {
   
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let id  = this.data.size_id;

   this.sizeinfo.size_id =  id;
   this.sizeinfo.size_name =  this.size_name
   this.sizeinfo.size_price =  this.size_price
   this.sizeinfo.size_stocks =  this.size_stocks

    this.ds.sendApiRequest("updateSize/" + id, this.sizeinfo).subscribe((data: { payload: any; }) => {});

        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    this.dialog.closeAll();
  }

}
