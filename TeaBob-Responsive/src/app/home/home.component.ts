import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ViewOrderComponent } from './view-order/view-order.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ds: DataService , public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.pullFoodFeatured();
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
    this.router.navigate(['/login']);
}

  // END OF SIDENAV AND TOOLBAR CODE

  //INSERT YOUR NEW TS CODE HERE

  

  foods: any[]=[];

  pullFoodFeatured(){
    this.ds.sendApiRequest("foodfeatured/", null).subscribe((data: { payload: any; }) => {
    this.foods = data.payload;
    })
  }


  
  viewOrder() {
    const dialog = this.dialog.open(ViewOrderComponent, {
      autoFocus: false, width:"70%", height:"50%"
    });
    dialog.afterClosed().subscribe( ()=>{
    });
  
  }


}
