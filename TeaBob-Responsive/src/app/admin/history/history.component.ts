

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewOrderHistoryComponent } from '../view-order-history/view-order-history.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(  private ds: DataService , public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.pullProd();
    this.pullHistory();
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
    this.ds.setUserLoggedOut();
    this.router.navigate(['/']);
}

products: any;
prodCounter: number = 0;

pullProd() {

  
  this.ds.sendApiRequest("food", null).subscribe((data: { payload: any; }) => {
    this.products = data.payload;

    for(let i = 0; i <= this.products.length; i++) {
      this.prodCounter = i;
    }


  })

}



history: any;

pullHistory() {
this.ds.sendApiRequest("pullHistory", null).subscribe((data: { payload: any; }) => {
  this.history = data.payload;

})

}


openCorBreakDown(history: any) {
// console.log(code);
const dialogRef = this.dialog.open(ViewOrderHistoryComponent , {
height: '70%',
width: '60%',
data: 
history
});
}

orderInfo: any  = {};

async delorder(e:any) {
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

  this.orderInfo.cocode = e;

  this.ds.sendApiRequest("delOrder", JSON.parse(JSON.stringify(this.orderInfo))).subscribe((data: any) => {
    // alert('Order Removed');
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

  

