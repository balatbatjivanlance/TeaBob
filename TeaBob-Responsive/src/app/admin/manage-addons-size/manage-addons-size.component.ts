import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { UpdateSizeComponent } from './update-size/update-size.component';
import { UpdateAddonsComponent } from './update-addons/update-addons.component';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-addons-size',
  templateUrl: './manage-addons-size.component.html',
  styleUrls: ['./manage-addons-size.component.css']
})
export class ManageAddonsSizeComponent implements OnInit {

  constructor(private ds: DataService,public router: Router, public dialog:MatDialog,
    route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pullAddOns();
    this.pullSize();
  }
  user_role = localStorage.getItem("user_role");


  // SIDENAV AND TOOLBAR CODE 

  showFiller = false;
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 769) {
        return true;
    } else {
        return false;
    }
  }
  
  logout(){
    localStorage.clear();
    window.localStorage.removeItem('id');
    this.router.navigate(['/login']);
}


  
  addons: any;

  pullAddOns(){
    this.ds.sendApiRequest("pullAddOns", null).subscribe((data: { payload: any; }) => {
    this.addons = data.payload;

    console.log(this.addons)
    })
  
  }
  openCorBreakDownAddons(addons: any) {
    // console.log(code);
    const dialogRef = this.dialog.open(UpdateAddonsComponent , {
      height: '50%',
      width: '50%',
      data: 
      addons
    });
  }

  size: any;

  pullSize(){
    this.ds.sendApiRequest("pullSize", null).subscribe((data: { payload: any; }) => {
    this.size = data.payload;

    console.log(this.size)
    })
  
  }

  openCorBreakDown(size: any) {
    // console.log(code);
    const dialogRef = this.dialog.open(UpdateSizeComponent , {
      height: '50%',
      width: '50%',
      data: 
      size
    });
  }

  sizeInfo: any  = {};

async delSize(e:any) {
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      
      this.sizeInfo.size_id = e;

      this.ds.sendApiRequest("delSize", JSON.parse(JSON.stringify(this.sizeInfo))).subscribe((data: any) => {
        // alert('Product Removed');
        // this.pullOrders();
      });
      
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      window.location.reload();
    }
  })

}

addonInfo: any  = {};

async delAddons(e:any) {
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.addonInfo.addon_id = e;

      this.ds.sendApiRequest("delAddons", JSON.parse(JSON.stringify(this.addonInfo))).subscribe((data: any) => {
        // alert('Product Removed');
        // this.pullOrders();
      });
      window.location.reload();
      
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

}


}
