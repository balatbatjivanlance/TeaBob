import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-addons',
  templateUrl: './update-addons.component.html',
  styleUrls: ['./update-addons.component.css']
})
export class UpdateAddonsComponent implements OnInit {

  constructor( private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, public dialog: MatDialog ) 
 { }

  ngOnInit(): void {
    this.pullAddons();
    this.pullCategory();
  }

    
  category: any;

  pullCategory(){
    this.ds.sendApiRequest("category", null).subscribe((data: { payload: any; }) => {
    this.category = data.payload;

    // console.log(this.category)
    })
  
  }

  addoninfo: any = {};
  addon_payload: any [] = []; 

  addon_name: any;
  addon_price: any;
  // addon_stocks: any;
  addon_category: any;

  pullAddons() {
    this.addoninfo.addon_id = this.data.addon_id;

    this.ds.sendApiRequest("pullAddonsDetails", this.data.addon_id).subscribe((data: { payload: any; }) => {
    this.addon_payload = data.payload;
    
    this.addon_name = this.addon_payload[0].addon_name;
    this.addon_price = this.addon_payload[0].addon_price;
    // this.addon_stocks = this.addon_payload[0].addon_stocks;
    }
    )
  }

  addonupdate: any [] = [];
  
  updateAddons() {
   
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let id  = this.data.addon_id;

   this.addoninfo.addon_id =  id;
   this.addoninfo.addon_name =  this.addon_name
   this.addoninfo.addon_price =  this.addon_price
  //  this.addoninfo.addon_stocks =  this.addon_stocks
   this.addoninfo.category_id =  this.addon_category

    this.ds.sendApiRequest("updateAddons/" + id, this.addoninfo).subscribe((data: { payload: any; }) => {});

        // Swal.fire('Saved!', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    this.dialog.closeAll();
  }

}
