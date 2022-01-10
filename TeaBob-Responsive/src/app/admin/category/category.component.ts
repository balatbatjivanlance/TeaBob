import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private ds: DataService, public dialog:MatDialog,public router: Router,
    route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pullCategory();
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

  // END OF SIDENAV AND TOOLBAR CODE

  //INSERT YOUR NEW TS CODE HERE


  category: any;

  pullCategory() {
      this.ds.sendApiRequest("category", null).subscribe((data: { payload: any; }) => {
        this.category = data.payload;
  
      })
    
  }

  
  category_name: any;
  category_Info : any = {};


  addCategory() {


    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Add'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Add Successfully!',
          'Category has been added.',
          'success'
        )
        this.category_Info.category_name = this.category_name;

    this.ds.sendApiRequest("addCategory", JSON.parse(JSON.stringify(this.category_Info))).subscribe((data: any) => {
  
    });
      }
    })

    

  }

  
  categoryInfo: any  = {};

  async delcategory(e:any) {

    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Delete Successfully!',
          'Category has been deleted.',
          'success'
        )
        this.category_Info.category_name = this.category_name;

    this.ds.sendApiRequest("addCategory", JSON.parse(JSON.stringify(this.category_Info))).subscribe((data: any) => {
  
    });
      }
    })
    
    // this.categoryInfo.category = e;

    //     this.ds.sendApiRequest("delCategory", JSON.parse(JSON.stringify(this.categoryInfo))).subscribe((data: any) => {
    //       alert('Order Removed');
    //       // this.pullOrders();
    //     });

  }

}
