import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { RegisterDriverComponent } from '../register-driver/register-driver.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-driver',
  templateUrl: './manage-driver.component.html',
  styleUrls: ['./manage-driver.component.css']
})
export class ManageDriverComponent implements OnInit {

  constructor( private ds: DataService ,public router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.pullDriver();
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

driver: any;

pullDriver() {
this.ds.sendApiRequest("pullDriver", null).subscribe((data: { payload: any; }) => {
  this.driver = data.payload;

})

}

driverInfo: any  = {};

async delDriver(e:any) {
  
  Swal.fire({
    title: 'Are you sure to fire this Driver?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.driverInfo.driver_id = e;

      this.ds.sendApiRequest("delDriver", JSON.parse(JSON.stringify(this.driverInfo))).subscribe((data: any) => {

      });
      window.location.reload();
      
      Swal.fire(
        'You`re Fired!',
        'The Driver has been fired.',
        'success'
      )
    }
  })

}


openModal() {

    const dialog = this.dialog.open(RegisterDriverComponent, {
      autoFocus: false, width:"70%", height:"70%",
    });
    dialog.afterClosed().subscribe( ()=>{
    });
  

}

}
