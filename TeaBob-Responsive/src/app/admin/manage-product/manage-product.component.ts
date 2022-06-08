import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateFoodComponent } from '../update-food/update-food.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  constructor( private ds: DataService ,public router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.adminPullFood();
  }

  user_role = localStorage.getItem("user_role");

  searchfood: any;

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

  // END OF SIDENAV AND TOOLBAR CODE

  //INSERT YOUR NEW TS CODE HERE

  

  adminfood: any;

  adminPullFood() {
      this.ds.sendApiRequest("adminfood", null).subscribe((data: { payload: any; }) => {
        this.adminfood = data.payload;
      })
    
  }

  
openCorBreakDown(adminfood: any) {
  const dialogRef = this.dialog.open(UpdateFoodComponent , {
    height: '60%',
    width: '60%',
    data: 
    adminfood
  });
}


productInfo: any  = {};

async delProd(e:any) {
  
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
      
      this.productInfo.food_id = e;

      this.ds.sendApiRequest("delProd", JSON.parse(JSON.stringify(this.productInfo))).subscribe((data: any) => {
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

}
