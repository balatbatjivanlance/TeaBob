import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor( private ds: DataService , public dialog: MatDialog, public router: Router ) { }

  ngOnInit(): void {

    this.pullProd();
    this.pullCategory();
    this.pullDashboard();
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

  categories: any;
  categCounter: number = 0;

  pullCategory() {

  
      this.ds.sendApiRequest("category", null).subscribe((data: { payload: any; }) => {
        this.categories = data.payload;

        for(let i = 0; i <= this.categories.length; i++) {
          this.categCounter = i;
        }
        
  
      })
    
  }

  dashboard: any;
  
  pullDashboard() {
    this.ds.sendApiRequest("dashboard", null).subscribe((data: { payload: any; }) => {
      this.dashboard = data.payload;

    })
  
}


openCorBreakDown(dashboard: any) {
  // console.log(code);
  const dialogRef = this.dialog.open(ViewOrdersComponent , {
    height: '50%',
    width: '50%',
    data: 
    dashboard
  });
}

}
