import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
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


  
  product: any;
  

  pullProduct(){
    this.ds.sendApiRequest("products", null).subscribe((data: { payload: any; }) => {
    this.product = data.payload;

    console.log(this.product)
    })
  
  }


}
